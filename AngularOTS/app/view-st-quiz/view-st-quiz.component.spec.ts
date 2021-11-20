import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStQuizComponent } from './view-st-quiz.component';

describe('ViewStQuizComponent', () => {
  let component: ViewStQuizComponent;
  let fixture: ComponentFixture<ViewStQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
