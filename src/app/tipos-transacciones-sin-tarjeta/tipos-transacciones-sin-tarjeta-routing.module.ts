import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { DepositosComponent } from './components/depositos/depositos.component';
import { IdentificacionComponent } from './components/identificacion/identificacion.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { CantidadComponent } from './components/cantidad/cantidad.component';
import { DepositoconfirmComponent } from './components/depositoconfirm/depositoconfirm.component';

const routes: Routes = [
  { path: 'seleccion', component: SeleccionComponent },
  { path: 'depositos', component: DepositosComponent, },
  { path: 'depositos/identification', component: IdentificacionComponent },
  { path: 'depositos/identification/cuenta', component: CuentaComponent },
  { path: 'depositos/identification/cuenta/cantidad', component: CantidadComponent },
  { path: 'depositos/identification/cuenta/cantidad/depositoconfirm', component: DepositoconfirmComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposTransaccionesSinTarjetaRoutingModule { }
