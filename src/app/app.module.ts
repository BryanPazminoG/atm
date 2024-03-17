import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ErrorComponent } from './Paginas/error/error.component';
import { InicioComponent } from './Paginas/login/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { CantidadretiroComponent } from './Paginas/transacciones-con-tarjeta/cantidadretiro/cantidadretiro.component';
import { DepositoconfirmComponent } from './Paginas/tipos-transacciones-sin-tarjeta/depositoconfirm/depositoconfirm.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    InicioComponent,
    CantidadretiroComponent,
    DepositoconfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }