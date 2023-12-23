import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsercionTarjetaComponent } from './components/insercion-tarjeta/insercion-tarjeta.component';

const routes: Routes = [
  { path: '', component: InsercionTarjetaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionesConTarjetaRoutingModule { }
