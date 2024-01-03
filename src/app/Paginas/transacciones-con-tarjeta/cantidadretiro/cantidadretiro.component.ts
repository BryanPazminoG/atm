import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';

@Component({
  selector: 'app-cantidadretiro',
  templateUrl: './cantidadretiro.component.html',
  styleUrls: ['./cantidadretiro.component.css']
})
export class CantidadretiroComponent {
  numeroIdentificacion: string='';
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  cantidadRetiro: string = '';
  valorRetiro: number = 0;

  constructor(private router: Router, private flujoDatos: FlujoDatosService) {}

  confirmarRetiro() {
    this.router.navigate(['transacciont/retiroconfirm']);
  }

  processButton(button: string): void {
    if (button === 'X') {
      this.cantidadRetiro = '';
    }
    else if (button === '✓') {
      if (this.cantidadRetiro.length <= 3) {
        this.valorRetiro = parseInt(this.cantidadRetiro);
        this.flujoDatos.SetValorRetiro(this.valorRetiro);
        this.confirmarRetiro();
        console.log("OK");
      }
    }
    else {
      if (this.cantidadRetiro.length == 3) {
        return;
      }
      let auxValor = this.cantidadRetiro;
      this.cantidadRetiro += button;
      let valor = parseInt(this.cantidadRetiro);
      if(valor > 100){
        this.cantidadRetiro = auxValor;
      }
    }
  }
}