import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsercionTarjetaComponent } from './insercion-tarjeta.component';

describe('InsercionTarjetaComponent', () => {
  let component: InsercionTarjetaComponent;
  let fixture: ComponentFixture<InsercionTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsercionTarjetaComponent]
    });
    fixture = TestBed.createComponent(InsercionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
