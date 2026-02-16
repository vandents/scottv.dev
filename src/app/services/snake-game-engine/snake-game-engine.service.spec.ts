import { TestBed } from '@angular/core/testing';
import { SnakeGameEngineService, Direction, GameState } from './snake-game-engine.service';

describe('SnakeGameEngineService', () => {
  let service: SnakeGameEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnakeGameEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start game with correct initial state', () => {
    service.startGame();
    expect(service.gameState()).toBe(GameState.PLAYING);
    expect(service.score()).toBe(0);
    expect(service.snake().length).toBeGreaterThan(0);
  });

  it('should not allow reverse direction', () => {
    service.startGame();
    const initialDirection = service.direction();

    if (initialDirection === Direction.RIGHT) {
      service.setDirection(Direction.LEFT);
      expect(service.direction()).toBe(Direction.RIGHT);
    }
  });

  it('should reset game correctly', () => {
    service.startGame();
    service.resetGame();
    expect(service.gameState()).toBe(GameState.IDLE);
    expect(service.score()).toBe(0);
  });

  it('should allow valid direction changes', () => {
    service.startGame();
    service.setDirection(Direction.UP);
    service.tick();
    expect(service.direction()).toBe(Direction.UP);
  });
});
