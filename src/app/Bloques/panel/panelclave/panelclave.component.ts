import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-panelclave',
  templateUrl: './panelclave.component.html',
  styleUrls: ['./panelclave.component.css']
})
export class PanelclaveComponent implements OnInit{
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroClave: string = '';
  targetaClave = {"pin": ""};
  constructor(private router: Router, private datosFlujo: FlujoDatosService) {}
  ngOnInit(): void {
    this.targetaClave = this.datosFlujo.GetTargeta();
  }

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroClave = '';
    }
    else if (button === '✓') {
      if (this.numeroClave.length == 4) {
        this.seleccionCt();
      }
    }
    else {
      if (this.numeroClave.length == 4) {
        return;
      }
      this.numeroClave+= button;
    }
  }

  seleccionCt() {
    if(this.numeroClave == this.targetaClave.pin)
      this.router.navigate(['transacciont/selecciont']);
    else{
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La clave de la tarjeta es incorrecta!",
      });   
    }
  }
}
