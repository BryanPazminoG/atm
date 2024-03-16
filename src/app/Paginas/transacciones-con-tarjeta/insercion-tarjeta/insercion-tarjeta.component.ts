import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';
import { ValidarClaveService } from 'src/app/shared/services/validar-clave.service';
import Swal from 'sweetalert2';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';

@Component({
  selector: 'app-insercion-tarjeta',
  templateUrl: './insercion-tarjeta.component.html',
  styleUrls: ['./insercion-tarjeta.component.css']
})
export class InsercionTarjetaComponent {

  constructor(private validarClaveService: ValidarClaveService, private flujoDato:FlujoDatosService, private router: Router) { }

  caracteresEnTarjeta: number = 16;
  numero: string = '';
  tarjetaencontrada: string = '';
  
  printTarjeta(): void {
    console.log(this.numero);
    console.log(this.numero.replaceAll('-', ''));
  }

  validarTarjeta(): void {

      this.tarjetaencontrada = this.numero.replaceAll('-', '');
      this.flujoDato.SetTargeta(this.tarjetaencontrada);
      this.router.navigate(['clave/panel-clave']);   
  }
}
