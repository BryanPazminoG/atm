import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cantidad',
  templateUrl: './cantidad.component.html',
  styleUrls: ['./cantidad.component.css']
})
export class CantidadComponent {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  cantidadDeposito: string = '';

  constructor(private router: Router) { }

  processButton(button: string): void {
    if (button === 'X') {
      this.cantidadDeposito = '';
    }
    else if (button === '✓') {
      if (this.cantidadDeposito.length <= 3) {
        Swal.fire("La cantidad a depositar es" + this.cantidadDeposito);
        this.router.navigate(['tipos/depositoconfirm']);
        console.log("OK");
      }
    }
    else {
      if (this.cantidadDeposito.length == 3) {
        return;
      }
      let auxValor = this.cantidadDeposito;
      this.cantidadDeposito += button;
      let valor = parseInt(this.cantidadDeposito);
      if (valor > 100) {
        this.cantidadDeposito = auxValor;
      }
    }
  }
}