import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecciontComponent } from './selecciont/selecciont.component';
<<<<<<< HEAD
import { ComprobanteretiroctComponent } from './comprobanteretiroct/comprobanteretiroct.component';



const routes: Routes = [
  { path: 'selecciont', component: SelecciontComponent},
  { path: 'retirosconfirmct', component: ComprobanteretiroctComponent},
=======
import { DepositoconfirmctComponent } from './depositoconfirmct/depositoconfirmct.component';
import { CantidadretiroComponent } from './cantidadretiro/cantidadretiro.component';

const routes: Routes = [
  { path: 'selecciont', component: SelecciontComponent},
  { path: 'retiroconfirm', component: DepositoconfirmctComponent},
  { path: 'cantidadretiro', component: CantidadretiroComponent}
>>>>>>> 37ad5f49a3fb56cb6de8baa0ed977061d9c3f802

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesConTarjetaRoutingModule { }
