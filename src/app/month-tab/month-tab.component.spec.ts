import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthTabComponent } from './month-tab.component';

describe('MonthTabComponent', () => {
  let component: MonthTabComponent;
  let fixture: ComponentFixture<MonthTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
