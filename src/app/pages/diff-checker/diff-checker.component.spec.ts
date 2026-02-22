import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DiffCheckerComponent } from './diff-checker.component';

describe('DiffCheckerComponent', () => {
  let component: DiffCheckerComponent;
  let fixture: ComponentFixture<DiffCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffCheckerComponent ],
      imports: [
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
        FormsModule,
        FontAwesomeModule
      ],
      providers: [ provideNoopAnimations() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compare texts and generate diff', () => {
    component.originalText = 'Hello World';
    component.modifiedText = 'Hello There';
    component.compareTexts();

    expect(component.hasCompared).toBe(true);
    expect(component.diffResults.length).toBeGreaterThan(0);
  });

  it('should clear all fields', () => {
    component.originalText = 'test';
    component.modifiedText = 'test2';
    component.hasCompared = true;
    component.clearAll();

    expect(component.originalText).toBe('');
    expect(component.modifiedText).toBe('');
    expect(component.hasCompared).toBe(false);
  });
});
