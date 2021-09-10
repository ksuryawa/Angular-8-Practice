import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task07Component } from './task07.component';

describe('Task07Component', () => {
  let component: Task07Component;
  let fixture: ComponentFixture<Task07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
