import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';
import { ValidartarjetaService } from 'src/app/shared/services/validartarjeta.service';
import Swal from 'sweetalert2';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';

@Component({
  selector: 'app-insercion-tarjeta',
  templateUrl: './insercion-tarjeta.component.html',
  styleUrls: ['./insercion-tarjeta.component.css']
})
export class InsercionTarjetaComponent {

  constructor(private validartarjeta: ValidartarjetaService, private flujoDato:FlujoDatosService, private router: Router) { }

  caracteresEnTarjeta: number = 16;
  numero: string = '';
  tarjetaencontrada: string = '';
  
  printTarjeta(): void {
    console.log(this.numero);
    console.log(this.numero.replaceAll('-', ''));
  }

  validarTarjeta(): void {
      this.validartarjeta.validarNumeroTarjeta(this.numero)
        .subscribe(
          (data) => {
            if (!data) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "El numero de la tarjeta es incorrecta!",
              });       
            } else {
              this.tarjetaencontrada = data;
              this.flujoDato.SetTargeta(this.tarjetaencontrada);
              this.router.navigate(['clave/panel-clave']);            
            }
          },
          (error) => {
            console.error('Error al buscar la tarjeta', error);
          }
        );
  }
}
