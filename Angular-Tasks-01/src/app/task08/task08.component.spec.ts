import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task08Component } from './task08.component';

describe('Task08Component', () => {
  let component: Task08Component;
  let fixture: ComponentFixture<Task08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
