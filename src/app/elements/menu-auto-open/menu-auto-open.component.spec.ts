import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAutoOpenComponent } from './menu-auto-open.component';

describe('MenuAutoOpenComponent', () => {
  let component: MenuAutoOpenComponent;
  let fixture: ComponentFixture<MenuAutoOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuAutoOpenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuAutoOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
