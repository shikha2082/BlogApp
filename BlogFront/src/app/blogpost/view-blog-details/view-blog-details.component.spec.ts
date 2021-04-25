import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlogDetailsComponent } from './view-blog-details.component';

describe('ViewBlogDetailsComponent', () => {
  let component: ViewBlogDetailsComponent;
  let fixture: ComponentFixture<ViewBlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBlogDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
