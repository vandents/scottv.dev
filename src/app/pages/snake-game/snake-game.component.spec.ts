import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SnakeGameComponent } from './snake-game.component';
import { SnakeGameEngineService } from '@services/snake-game-engine/snake-game-engine.service';

describe('SnakeGameComponent', () => {
  let component: SnakeGameComponent;
  let fixture: ComponentFixture<SnakeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakeGameComponent ],
      imports: [
        MatButtonModule,
        FontAwesomeModule
      ],
      providers: [ SnakeGameEngineService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnakeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize canvas', () => {
    expect(component.canvasSize).toBeGreaterThan(0);
  });

  it('should start game when startGame is called', () => {
    component.startGame();
    expect(component.gameEngine.gameState()).not.toBe('IDLE');
  });

  it('should clean up on destroy', () => {
    const spy = spyOn<any>(component, 'stopGameLoop');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
