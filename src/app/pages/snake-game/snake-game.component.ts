import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { SnakeGameEngineService, Direction, GameState } from '@services/snake-game-engine/snake-game-engine.service';
import { SharedModule } from '@app/shared.module';

/**
 * Snake Game Component
 * Handles rendering and user input
 * Game logic is delegated to SnakeGameEngineService
 */
@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent implements OnInit, OnDestroy {
  @ViewChild('gameCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  // Canvas rendering context
  private ctx!: CanvasRenderingContext2D;

  // Game loop animation frame ID
  private animationFrameId: number | null = null;

  // Timing control
  private lastTickTime = 0;

  // Canvas size (will be calculated based on grid)
  private readonly cellSize = 25; // pixels per grid cell
  canvasSize = 0;

  // Expose enums to template
  readonly GameState = GameState;
  readonly Direction = Direction;
  private platformId = inject(PLATFORM_ID);

  constructor(
    private title: Title,
    public gameEngine: SnakeGameEngineService
  ) {
    this.title.setTitle('Scott VandenToorn - Snake Game');

    // React to game state changes (browser only - no requestAnimationFrame on server)
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const state = this.gameEngine.gameState();
        if (state === GameState.PLAYING && !this.animationFrameId) {
          this.startGameLoop();
        } else if (state !== GameState.PLAYING && this.animationFrameId) {
          this.stopGameLoop();
        }
      });
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
      this.initializeCanvas();
      this.renderInitialState();
    }
  }

  ngOnDestroy(): void {
    // Clean up animation frame to prevent memory leaks
    this.stopGameLoop();
  }

  /**
   * Initialize canvas and rendering context
   */
  private initializeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Failed to get canvas 2D context');
    }

    this.ctx = context;

    // Set canvas size based on grid
    this.canvasSize = this.gameEngine.gridSize * this.cellSize;
    canvas.width = this.canvasSize;
    canvas.height = this.canvasSize;
  }

  /**
   * Render initial state (empty grid)
   */
  private renderInitialState(): void {
    this.clearCanvas();
    this.drawGrid();
  }

  /**
   * Start the game
   */
  startGame(): void {
    this.gameEngine.startGame();
  }

  /**
   * Restart the game
   */
  restartGame(): void {
    this.gameEngine.resetGame();
    this.renderInitialState();
  }

  /**
   * Handle direction button clicks for mobile controls
   */
  handleDirectionClick(direction: Direction): void {
    this.gameEngine.setDirection(direction);
  }

  /**
   * Handle keyboard input
   */
  @HostListener('window:keydown', ['$event'])
  handleKeyboardInput(event: KeyboardEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const keyMap: { [key: string]: Direction } = {
      'ArrowUp': Direction.UP,
      'ArrowDown': Direction.DOWN,
      'ArrowLeft': Direction.LEFT,
      'ArrowRight': Direction.RIGHT,
      'w': Direction.UP,
      'W': Direction.UP,
      's': Direction.DOWN,
      'S': Direction.DOWN,
      'a': Direction.LEFT,
      'A': Direction.LEFT,
      'd': Direction.RIGHT,
      'D': Direction.RIGHT
    };

    const direction = keyMap[event.key];
    if (direction) {
      event.preventDefault();
      this.gameEngine.setDirection(direction);
    }

    // Start game with space or enter
    if (this.gameEngine.gameState() === GameState.IDLE &&
        (event.key === ' ' || event.key === 'Enter')) {
      event.preventDefault();
      this.startGame();
    }
  }

  /**
   * Main game loop using requestAnimationFrame
   */
  private startGameLoop(): void {
    this.lastTickTime = performance.now();

    const gameLoop = (currentTime: number) => {
      // Only continue if game is still playing
      if (this.gameEngine.gameState() !== GameState.PLAYING) {
        this.stopGameLoop();
        return;
      }

      // Check if enough time has passed for next tick
      const deltaTime = currentTime - this.lastTickTime;
      const speed = this.gameEngine.speed();

      if (deltaTime >= speed) {
        this.lastTickTime = currentTime;

        // Execute game tick
        const continueGame = this.gameEngine.tick();

        // Render current state
        this.render();

        if (!continueGame) {
          this.stopGameLoop();
          return;
        }
      }

      // Schedule next frame
      this.animationFrameId = requestAnimationFrame(gameLoop);
    };

    this.animationFrameId = requestAnimationFrame(gameLoop);
  }

  /**
   * Stop the game loop
   */
  private stopGameLoop(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  /**
   * Render the current game state
   */
  private render(): void {
    this.clearCanvas();
    this.drawGrid();
    this.drawFood();
    this.drawSnake();
  }

  /**
   * Clear the entire canvas
   */
  private clearCanvas(): void {
    this.ctx.fillStyle = '#1a1a1a';
    this.ctx.fillRect(0, 0, this.canvasSize, this.canvasSize);
  }

  /**
   * Draw grid lines
   */
  private drawGrid(): void {
    this.ctx.strokeStyle = '#2a2a2a';
    this.ctx.lineWidth = 1;

    // Draw vertical lines
    for (let x = 0; x <= this.gameEngine.gridSize; x++) {
      const xPos = x * this.cellSize;
      this.ctx.beginPath();
      this.ctx.moveTo(xPos, 0);
      this.ctx.lineTo(xPos, this.canvasSize);
      this.ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= this.gameEngine.gridSize; y++) {
      const yPos = y * this.cellSize;
      this.ctx.beginPath();
      this.ctx.moveTo(0, yPos);
      this.ctx.lineTo(this.canvasSize, yPos);
      this.ctx.stroke();
    }
  }

  /**
   * Draw the snake
   */
  private drawSnake(): void {
    const snake = this.gameEngine.snake();

    snake.forEach((segment, index) => {
      const x = segment.x * this.cellSize;
      const y = segment.y * this.cellSize;

      // Head is brighter
      if (index === 0) {
        this.ctx.fillStyle = '#4CAF50';
      } else {
        this.ctx.fillStyle = '#45a049';
      }

      // Draw segment with slight padding
      this.ctx.fillRect(
        x + 1,
        y + 1,
        this.cellSize - 2,
        this.cellSize - 2
      );

      // Add eye to head
      if (index === 0) {
        this.ctx.fillStyle = '#1a1a1a';
        const eyeSize = 3;
        const direction = this.gameEngine.direction();

        // Position eyes based on direction
        if (direction === Direction.RIGHT) {
          this.ctx.fillRect(x + this.cellSize - 8, y + 6, eyeSize, eyeSize);
          this.ctx.fillRect(x + this.cellSize - 8, y + this.cellSize - 9, eyeSize, eyeSize);
        } else if (direction === Direction.LEFT) {
          this.ctx.fillRect(x + 5, y + 6, eyeSize, eyeSize);
          this.ctx.fillRect(x + 5, y + this.cellSize - 9, eyeSize, eyeSize);
        } else if (direction === Direction.UP) {
          this.ctx.fillRect(x + 6, y + 5, eyeSize, eyeSize);
          this.ctx.fillRect(x + this.cellSize - 9, y + 5, eyeSize, eyeSize);
        } else if (direction === Direction.DOWN) {
          this.ctx.fillRect(x + 6, y + this.cellSize - 8, eyeSize, eyeSize);
          this.ctx.fillRect(x + this.cellSize - 9, y + this.cellSize - 8, eyeSize, eyeSize);
        }
      }
    });
  }

  /**
   * Draw the food
   */
  private drawFood(): void {
    const food = this.gameEngine.food();
    const x = food.x * this.cellSize;
    const y = food.y * this.cellSize;

    // Draw apple-like food
    this.ctx.fillStyle = '#F44336';
    this.ctx.beginPath();
    this.ctx.arc(
      x + this.cellSize / 2,
      y + this.cellSize / 2,
      this.cellSize / 2 - 3,
      0,
      Math.PI * 2
    );
    this.ctx.fill();

    // Add stem
    this.ctx.strokeStyle = '#8B4513';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(x + this.cellSize / 2, y + 5);
    this.ctx.lineTo(x + this.cellSize / 2, y + 10);
    this.ctx.stroke();
  }
}
