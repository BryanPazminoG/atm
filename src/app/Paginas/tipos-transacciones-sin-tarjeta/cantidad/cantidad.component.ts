import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cantidad',
  templateUrl: './cantidad.component.html',
  styleUrls: ['./cantidad.component.css']
})
export class CantidadComponent {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  cantidadDeposito: string = '';
  valorDeposito: number = 0;


  constructor(private router: Router,private flujoDatos: FlujoDatosService) { }
  confirmarDeposito() {
    this.router.navigate(['tipos/depositoconfirm']);
  }
  processButton(button: string): void {
    if (button === 'X') {
      this.cantidadDeposito = '';
    }
    else if (button === '✓') {
      if (this.cantidadDeposito.length <= 3) {
        this.valorDeposito = parseInt(this.cantidadDeposito);
        this.flujoDatos.SetCantidadDeposito(this.valorDeposito);
        this.confirmarDeposito();
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
      if(valor > 100){
        this.cantidadDeposito = auxValor;
      }
    }
  }
}



