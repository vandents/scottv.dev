import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownPreviewerComponent } from './markdown-previewer.component';

describe('MarkdownPreviewerComponent', () => {
  let component: MarkdownPreviewerComponent;
  let fixture: ComponentFixture<MarkdownPreviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkdownPreviewerComponent]
    });
    fixture = TestBed.createComponent(MarkdownPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
