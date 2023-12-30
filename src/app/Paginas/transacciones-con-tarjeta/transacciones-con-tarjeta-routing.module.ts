import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecciontComponent } from './selecciont/selecciont.component';
import { DepositoconfirmctComponent } from './depositoconfirmct/depositoconfirmct.component';

const routes: Routes = [
  { path: 'selecciont', component: SelecciontComponent},
  { path: 'retiroconfirm', component: DepositoconfirmctComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesConTarjetaRoutingModule { }
