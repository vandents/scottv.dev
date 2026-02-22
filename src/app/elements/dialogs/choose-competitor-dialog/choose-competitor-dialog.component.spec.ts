import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCompetitorDialogComponent } from './choose-competitor-dialog.component';

describe('ChooseCompetitorDialogComponent', () => {
  let component: ChooseCompetitorDialogComponent;
  let fixture: ComponentFixture<ChooseCompetitorDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCompetitorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCompetitorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
