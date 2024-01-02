import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';
import { ValidartarjetaService } from 'src/app/shared/validartarjeta.service';

@Component({
  selector: 'app-insercion-tarjeta',
  templateUrl: './insercion-tarjeta.component.html',
  styleUrls: ['./insercion-tarjeta.component.css']
})
export class InsercionTarjetaComponent {

  constructor(private validartarjeta: ValidartarjetaService, private router: Router) { }

  caracteresEnTarjeta: number = 16;
  numero: string = '';
  pinencontrado: string = '';

  printTarjeta(): void {
    console.log(this.numero);
    console.log(this.numero.replaceAll('-', ''));
  }

  panelClave() {
    // this.router.navigate(['clave/panel-clave']);
    const numeroTarjeta = {
      // codTarjeta: 1,
      // codCuenta: 1,
      numero: this.numero,
      // fechaEmision: "2014-11-14T05:00:00.000+00:00",
      // fechaVencimiento: "2021-12-01T05:00:00.000+00:00",
      // cvc: "596",
      // pin: "1234",
      // tipoTarjeta: "DEB",
      // redPago: "AMX",
      // estado: "ACT",
      // fechaUltimoCambio: "2024-01-01T05:00:00.000+00:00",
      // version: 1
    };

    console.log(numeroTarjeta);

    if (this.numero.length === this.caracteresEnTarjeta) {
      this.validartarjeta.validarNumeroTarjeta(this.numero)
        .subscribe(
          (data) => {
            console.log('Tarjeta encontrada con éxito', data);
            // Puedes asignar los valores de la tarjeta a propiedades locales si es necesario
            // this.pinencontrado = data.pin;
          },
          (error) => {
            console.error('Error al buscar la tarjeta', error);
          }
        );
    } else {
      console.error('Longitud incorrecta del número de tarjeta');
    }



  }
}
