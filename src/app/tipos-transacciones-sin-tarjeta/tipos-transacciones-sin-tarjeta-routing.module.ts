import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { DepositosComponent } from './components/depositos/depositos.component';
import { IdentificacionComponent } from './components/identificacion/identificacion.component';

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
