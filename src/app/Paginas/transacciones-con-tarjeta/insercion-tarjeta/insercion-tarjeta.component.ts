import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insercion-tarjeta',
  templateUrl: './insercion-tarjeta.component.html',
  styleUrls: ['./insercion-tarjeta.component.css']
})
export class InsercionTarjetaComponent {
  
  constructor(private router: Router) { }

  caracteresEnTarjeta: number = 16;
  numeroTarjeta: string = '';

  printTarjeta(): void {
    console.log(this.numeroTarjeta);
    console.log(this.numeroTarjeta.replaceAll('-', ''));
  }

  panelClave() {
    this.router.navigate(['clave/panel-clave']);
  }
}
