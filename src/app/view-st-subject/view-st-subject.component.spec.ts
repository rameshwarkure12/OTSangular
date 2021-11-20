import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStSubjectComponent } from './view-st-subject.component';

describe('ViewStSubjectComponent', () => {
  let component: ViewStSubjectComponent;
  let fixture: ComponentFixture<ViewStSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
