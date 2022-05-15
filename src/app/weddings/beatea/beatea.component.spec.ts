import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeateaComponent } from './beatea.component';

describe('BeateaComponent', () => {
  let component: BeateaComponent;
  let fixture: ComponentFixture<BeateaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeateaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeateaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
