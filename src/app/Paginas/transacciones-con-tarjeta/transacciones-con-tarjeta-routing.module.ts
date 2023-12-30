import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecciontComponent } from './selecciont/selecciont.component';
import { ComprobanteretiroctComponent } from './comprobanteretiroct/comprobanteretiroct.component';



const routes: Routes = [
  { path: 'selecciont', component: SelecciontComponent},
  { path: 'retirosconfirmct', component: ComprobanteretiroctComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesConTarjetaRoutingModule { }
