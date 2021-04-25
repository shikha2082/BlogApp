import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBlogpostComponent } from './show-blogpost.component';

describe('ShowBlogpostComponent', () => {
  let component: ShowBlogpostComponent;
  let fixture: ComponentFixture<ShowBlogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBlogpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
