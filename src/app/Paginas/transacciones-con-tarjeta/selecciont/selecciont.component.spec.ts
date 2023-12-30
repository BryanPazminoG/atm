/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelecciontComponent } from './selecciont.component';

describe('SelecciontComponent', () => {
  let component: SelecciontComponent;
  let fixture: ComponentFixture<SelecciontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecciontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecciontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
