import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecciontComponent } from './selecciont/selecciont.component';
import { ComprobanteretiroctComponent } from './comprobanteretiroct/comprobanteretiroct.component';
import { InsercionTarjetaComponent } from './insercion-tarjeta/insercion-tarjeta.component';



const routes: Routes = [

  { path: 'selecciont', component: SelecciontComponent},
  { path: 'retiroconfirm', component: ComprobanteretiroctComponent},
  { path: 'inserciontarjeta', component: InsercionTarjetaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesConTarjetaRoutingModule { }
