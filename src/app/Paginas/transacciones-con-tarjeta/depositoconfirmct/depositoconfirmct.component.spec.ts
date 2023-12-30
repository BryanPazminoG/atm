/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DepositoconfirmctComponent } from './depositoconfirmct.component';

describe('DepositoconfirmctComponent', () => {
  let component: DepositoconfirmctComponent;
  let fixture: ComponentFixture<DepositoconfirmctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoconfirmctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoconfirmctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
