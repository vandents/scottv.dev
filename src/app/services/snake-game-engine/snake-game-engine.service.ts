import { Injectable, signal, computed } from '@angular/core';

/** Represents a position on the game grid */
export interface Position {
  x: number;
  y: number;
}

/** Possible directions for snake movement */
export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

/** Game state enum */
export enum GameState {
  IDLE = 'IDLE',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER'
}

/**
 * Snake Game Engine Service
 * Handles all game logic, state management, and collision detection
 * Separated from rendering concerns for clean architecture
 */
@Injectable({
  providedIn: 'root'
})
export class SnakeGameEngineService {
  // Grid configuration
  readonly gridSize = 20; // 20x20 grid
  readonly initialSpeed = 150; // milliseconds per move
  readonly speedIncreaseRate = 0.02; // Speed increase per food eaten

  // Game state signals
  private readonly _snake = signal<Position[]>([{ x: 10, y: 10 }]);
  private readonly _food = signal<Position>({ x: 15, y: 15 });
  private readonly _direction = signal<Direction>(Direction.RIGHT);
  private readonly _score = signal<number>(0);
  private readonly _gameState = signal<GameState>(GameState.IDLE);
  private readonly _speed = signal<number>(this.initialSpeed);

  // Direction queue to handle rapid key presses (max 3 queued moves)
  private directionQueue: Direction[] = [];
  private readonly maxQueueSize = 3;

  // Public readonly signals
  readonly snake = this._snake.asReadonly();
  readonly food = this._food.asReadonly();
  readonly direction = this._direction.asReadonly();
  readonly score = this._score.asReadonly();
  readonly gameState = this._gameState.asReadonly();
  readonly speed = this._speed.asReadonly();

  // Computed signal for high score (could be persisted to localStorage later)
  readonly highScore = computed(() => {
    const currentHigh = this.getHighScore();
    return Math.max(currentHigh, this._score());
  });

  constructor() {}

  /**
   * Initialize a new game
   * Resets all state to default values and spawns initial food
   */
  startGame(): void {
    // Reset snake to center, moving right
    this._snake.set([
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ]);

    this._direction.set(Direction.RIGHT);
    this.directionQueue = [];
    this._score.set(0);
    this._speed.set(this.initialSpeed);
    this._gameState.set(GameState.PLAYING);

    // Spawn food in a random empty position
    this.spawnFood();
  }

  /**
   * Reset game to idle state
   */
  resetGame(): void {
    this._gameState.set(GameState.IDLE);
    this._snake.set([{ x: 10, y: 10 }]);
    this._direction.set(Direction.RIGHT);
    this.directionQueue = [];
    this._score.set(0);
    this._speed.set(this.initialSpeed);
  }

  /**
   * Update snake direction using a queue
   * Prevents reverse-direction movement (e.g., can't go left while moving right)
   * Allows buffering multiple direction changes for responsive controls
   */
  setDirection(newDirection: Direction): void {
    if (this._gameState() !== GameState.PLAYING) return;

    // Don't queue if already at max capacity
    if (this.directionQueue.length >= this.maxQueueSize) return;

    // Get the reference direction (last in queue, or current direction if queue is empty)
    const referenceDirection = this.directionQueue.length > 0
      ? this.directionQueue[this.directionQueue.length - 1]
      : this._direction();

    // Prevent 180-degree turns
    const isOpposite =
      (newDirection === Direction.UP && referenceDirection === Direction.DOWN) ||
      (newDirection === Direction.DOWN && referenceDirection === Direction.UP) ||
      (newDirection === Direction.LEFT && referenceDirection === Direction.RIGHT) ||
      (newDirection === Direction.RIGHT && referenceDirection === Direction.LEFT);

    // Don't add if it's the same as the last queued direction
    const isDuplicate = newDirection === referenceDirection;

    if (!isOpposite && !isDuplicate) {
      this.directionQueue.push(newDirection);
    }
  }

  /**
   * Main game tick - moves snake one step
   * Returns false if game should end (collision detected)
   */
  tick(): boolean {
    if (this._gameState() !== GameState.PLAYING) return false;

    // Process next direction from queue
    if (this.directionQueue.length > 0) {
      const nextDirection = this.directionQueue.shift()!;
      this._direction.set(nextDirection);
    }

    const currentSnake = this._snake();
    const head = currentSnake[0];

    // Calculate new head position
    const newHead = this.getNewHeadPosition(head, this._direction());

    // Check wall collision
    if (this.isWallCollision(newHead)) {
      this.endGame();
      return false;
    }

    // Check self collision
    if (this.isSelfCollision(newHead, currentSnake)) {
      this.endGame();
      return false;
    }

    // Check food collision
    const foodEaten = this.isFoodCollision(newHead);

    if (foodEaten) {
      // Grow snake (don't remove tail)
      this._snake.set([newHead, ...currentSnake]);

      // Update score
      this._score.update(s => s + 10);

      // Increase speed slightly
      this._speed.update(speed => Math.max(50, speed * (1 - this.speedIncreaseRate)));

      // Spawn new food
      this.spawnFood();

      // Save high score
      this.saveHighScore();
    } else {
      // Move snake (add new head, remove tail)
      this._snake.set([newHead, ...currentSnake.slice(0, -1)]);
    }

    return true;
  }

  /**
   * Calculate next head position based on current direction
   */
  private getNewHeadPosition(head: Position, direction: Direction): Position {
    switch (direction) {
      case Direction.UP:
        return { x: head.x, y: head.y - 1 };
      case Direction.DOWN:
        return { x: head.x, y: head.y + 1 };
      case Direction.LEFT:
        return { x: head.x - 1, y: head.y };
      case Direction.RIGHT:
        return { x: head.x + 1, y: head.y };
    }
  }

  /**
   * Check if position is outside grid bounds
   */
  private isWallCollision(position: Position): boolean {
    return position.x < 0 ||
           position.x >= this.gridSize ||
           position.y < 0 ||
           position.y >= this.gridSize;
  }

  /**
   * Check if position collides with snake body
   */
  private isSelfCollision(position: Position, snake: Position[]): boolean {
    return snake.some(segment =>
      segment.x === position.x && segment.y === position.y
    );
  }

  /**
   * Check if position is on food
   */
  private isFoodCollision(position: Position): boolean {
    const food = this._food();
    return position.x === food.x && position.y === food.y;
  }

  /**
   * Spawn food at random empty position
   */
  private spawnFood(): void {
    const snake = this._snake();
    let newFood: Position;
    let attempts = 0;
    const maxAttempts = 100;

    do {
      newFood = {
        x: Math.floor(Math.random() * this.gridSize),
        y: Math.floor(Math.random() * this.gridSize)
      };
      attempts++;
    } while (
      this.isSelfCollision(newFood, snake) &&
      attempts < maxAttempts
    );

    this._food.set(newFood);
  }

  /**
   * End the game
   */
  private endGame(): void {
    this._gameState.set(GameState.GAME_OVER);
    this.saveHighScore();
  }

  /**
   * Get high score from localStorage
   */
  private getHighScore(): number {
    if (typeof window === 'undefined') return 0;
    const stored = localStorage.getItem('snakeHighScore');
    return stored ? parseInt(stored, 10) : 0;
  }

  /**
   * Save high score to localStorage
   */
  private saveHighScore(): void {
    if (typeof window === 'undefined') return;
    const currentHigh = this.getHighScore();
    const newScore = this._score();
    if (newScore > currentHigh) {
      localStorage.setItem('snakeHighScore', newScore.toString());
    }
  }
}
