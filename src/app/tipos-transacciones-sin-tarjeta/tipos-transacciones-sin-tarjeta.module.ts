import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposTransaccionesSinTarjetaRoutingModule } from './tipos-transacciones-sin-tarjeta-routing.module';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { DepositosComponent } from './components/depositos/depositos.component';
import { IdentificacionComponent } from './components/identificacion/identificacion.component';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeleccionComponent,
    DepositosComponent,
    IdentificacionComponent
  ],
  imports: [
    CommonModule,
    InputMaskModule,
    TiposTransaccionesSinTarjetaRoutingModule,
    FormsModule
  ]
})
export class TiposTransaccionesSinTarjetaModule { }
