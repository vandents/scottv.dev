import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Base64ToolComponent } from './base64-tool.component';

describe('Base64ToolComponent', () => {
  let component: Base64ToolComponent;
  let fixture: ComponentFixture<Base64ToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64ToolComponent ],
      imports: [
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        FontAwesomeModule
      ],
      providers: [ provideNoopAnimations() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Base64ToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should encode text to base64', () => {
    component.plainText = 'Hello World';
    component.encodeToBase64();
    expect(component.encodedText).toBe('SGVsbG8gV29ybGQ=');
  });

  it('should decode base64 to text', () => {
    component.encodedText = 'SGVsbG8gV29ybGQ=';
    component.decodeFromBase64();
    expect(component.plainText).toBe('Hello World');
  });

  it('should clear all fields', () => {
    component.plainText = 'test';
    component.encodedText = 'dGVzdA==';
    component.clearAll();
    expect(component.plainText).toBe('');
    expect(component.encodedText).toBe('');
  });
});
