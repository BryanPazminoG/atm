import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarcuentaService } from 'src/app/shared/services/buscarcuenta.service';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroCuenta: string = '';
  constructor(private router: Router, private servicioDato: FlujoDatosService,private serviciocuenta : BuscarcuentaService) {

  }

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroCuenta = '';
    }
    else if (button === '✓') {
      this.serviciocuenta.buscarcuenta(this.numeroCuenta).subscribe({
        next: (response) => {
          if (response != null) {
            this.servicioDato.SetNumeroCuenta(this.numeroCuenta);
            this.router.navigate(['tipos/cantidad']);
          } else {
            Swal.fire({
              icon: "error",
              title: "Numero de cuenta incorrecto",
              text: "No se ha encontrado el numero de cuenta ingresada.",
            });
          }
          console.log(response);
        }
      }); 

    }
    else {
      if (this.numeroCuenta.length == 10) {
        return;
      }
      this.numeroCuenta += button;
    }
  }
}