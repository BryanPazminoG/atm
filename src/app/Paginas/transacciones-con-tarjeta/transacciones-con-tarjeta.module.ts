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
import { ComprobanteretiroctComponent } from './comprobanteretiroct/comprobanteretiroct.component';

@NgModule({
  declarations: [
    InsercionTarjetaComponent,
<<<<<<< HEAD
    ComprobanteretiroctComponent
=======
    CantidadretiroComponent
>>>>>>> 37ad5f49a3fb56cb6de8baa0ed977061d9c3f802
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
