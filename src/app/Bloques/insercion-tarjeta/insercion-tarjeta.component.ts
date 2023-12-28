import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-insercion-tarjeta',
  templateUrl: './insercion-tarjeta.component.html',
  styleUrls: ['./insercion-tarjeta.component.css']
})
export class InsercionTarjetaComponent {
  caracteresEnTarjeta: number = 16;
  numeroTarjeta: string = '';

  printTarjeta(): void {
    console.log(this.numeroTarjeta);
    console.log(this.numeroTarjeta.replaceAll('-', ''));
  }
}
