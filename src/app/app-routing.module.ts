import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Paginas/error/error.component';


const routes: Routes = [
  {
    path: 'transacciont',
    loadChildren: () => import('./transacciones-con-tarjeta/transacciones-con-tarjeta.module').then(m => m.TransaccionesConTarjetaModule)
  },
  {
    path: 'tipos',
    loadChildren: () => import('./tipos-transacciones-sin-tarjeta/tipos-transacciones-sin-tarjeta.module').then(m => m.TiposTransaccionesSinTarjetaModule)
  },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
