import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDayComponent } from './good-day.component';

describe('GoodDayComponent', () => {
  let component: GoodDayComponent;
  let fixture: ComponentFixture<GoodDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
