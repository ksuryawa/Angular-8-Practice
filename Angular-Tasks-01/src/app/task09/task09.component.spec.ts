import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task09Component } from './task09.component';

describe('Task09Component', () => {
  let component: Task09Component;
  let fixture: ComponentFixture<Task09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
