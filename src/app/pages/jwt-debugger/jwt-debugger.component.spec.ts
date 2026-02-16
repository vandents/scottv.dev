import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { JwtDebuggerComponent } from './jwt-debugger.component';

describe('JwtDebuggerComponent', () => {
  let component: JwtDebuggerComponent;
  let fixture: ComponentFixture<JwtDebuggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtDebuggerComponent ],
      imports: [
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        FormsModule,
        BrowserAnimationsModule,
        FontAwesomeModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JwtDebuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decode a valid JWT token', () => {
    const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    component.encodedToken = validToken;
    component.decodeToken();

    expect(component.isValidToken).toBe(true);
    expect(component.decodedHeader).toContain('HS256');
    expect(component.decodedPayload).toContain('John Doe');
  });

  it('should handle invalid JWT token', () => {
    component.encodedToken = 'invalid.token';
    component.decodeToken();

    expect(component.isValidToken).toBe(false);
    expect(component.errorMessage).toBeTruthy();
  });

  it('should clear all fields', () => {
    component.encodedToken = 'test';
    component.decodedHeader = 'test';
    component.decodedPayload = 'test';
    component.clearAll();

    expect(component.encodedToken).toBe('');
    expect(component.decodedHeader).toBe('');
    expect(component.decodedPayload).toBe('');
  });
});
