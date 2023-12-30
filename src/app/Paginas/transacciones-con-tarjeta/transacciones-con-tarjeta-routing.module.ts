import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecciontComponent } from './selecciont/selecciont.component';
import { DepositoconfirmctComponent } from './depositoconfirmct/depositoconfirmct.component';
import { CantidadretiroComponent } from './cantidadretiro/cantidadretiro.component';

const routes: Routes = [
  { path: 'selecciont', component: SelecciontComponent},
  { path: 'retiroconfirm', component: DepositoconfirmctComponent},
  { path: 'cantidadretiro', component: CantidadretiroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesConTarjetaRoutingModule { }
