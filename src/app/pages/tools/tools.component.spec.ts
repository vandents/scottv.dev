import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToolsComponent } from './tools.component';

describe('ToolsComponent', () => {
  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsComponent ],
      imports: [
        MatCardModule,
        FontAwesomeModule
      ],
      providers: [ provideRouter([]) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have tools array', () => {
    expect(component.tools).toBeTruthy();
    expect(component.tools.length).toBeGreaterThan(0);
  });

  it('should navigate to tool route', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.navigateToTool('/jwt-debugger');
    expect(navigateSpy).toHaveBeenCalledWith(['/jwt-debugger']);
  });
});
