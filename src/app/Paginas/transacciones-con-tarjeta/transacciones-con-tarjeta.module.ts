import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InsercionTarjetaComponent } from '../../Bloques/insercion-tarjeta/insercion-tarjeta.component';
import { TransaccionesConTarjetaRoutingModule } from './transacciones-con-tarjeta-routing.module';
import { CantidadretiroComponent } from './cantidadretiro/cantidadretiro.component';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    InsercionTarjetaComponent,
    CantidadretiroComponent
  ],
  imports: [
    CommonModule,
    TransaccionesConTarjetaRoutingModule,
    InputNumberModule,
    FormsModule,
    InputMaskModule,
    ButtonModule
  ]
})
export class TransaccionesConTarjetaModule { }
