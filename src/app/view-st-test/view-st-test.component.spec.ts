import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStTestComponent } from './view-st-test.component';

describe('ViewStTestComponent', () => {
  let component: ViewStTestComponent;
  let fixture: ComponentFixture<ViewStTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
