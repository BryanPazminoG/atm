import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionComponent } from '../../Bloques/seleccion/seleccion.component';
import { DepositosComponent } from '../../Bloques/depositos/depositos.component';
import { IdentificacionComponent } from '../../Bloques/identificacion/identificacion.component';

const routes: Routes = [
  { path: '', component: SeleccionComponent },
  { path: 'depositos', component: DepositosComponent, },
  { path: 'depositos/identification', component: IdentificacionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposTransaccionesSinTarjetaRoutingModule { }
