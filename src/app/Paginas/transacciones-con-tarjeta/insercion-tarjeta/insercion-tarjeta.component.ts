import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';
import { ValidartarjetaService } from 'src/app/shared/services/validartarjeta.service';

@Component({
  selector: 'app-insercion-tarjeta',
  templateUrl: './insercion-tarjeta.component.html',
  styleUrls: ['./insercion-tarjeta.component.css']
})
export class InsercionTarjetaComponent {

  constructor(private validartarjeta: ValidartarjetaService, private router: Router) { }

  caracteresEnTarjeta: number = 16;
  numero: string = '';
  
  printTarjeta(): void {
    console.log(this.numero);
    console.log(this.numero.replaceAll('-', ''));
  }

  validarTarjeta() {
    
    if (this.numero.length === this.caracteresEnTarjeta) {
      this.validartarjeta.validarNumeroTarjeta(this.numero)
        .subscribe(
          (data) => {
            console.log('Tarjeta encontrada con éxito', data);
            if (data && data.encontrada) {
              // Si existe, redirige a la siguiente página
              this.router.navigate(['clave/panel-clave']);
            } else {
              // Si no existe, muestra un mensaje de error
              console.error('Número de tarjeta no encontrado en la base de datos');
            }
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
