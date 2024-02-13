import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';
import { ValidarClaveService } from 'src/app/shared/services/validar-clave.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-panelclave',
  templateUrl: './panelclave.component.html',
  styleUrls: ['./panelclave.component.css']
})
export class PanelclaveComponent implements OnInit {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroClave: string = '';
  targetaClave = { "pin": "" };
  claveEncontrada : string = '';

  constructor(private router: Router, private datosFlujo: FlujoDatosService, private clave: ValidarClaveService) { }
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
      this.numeroClave += button;
    }
  }

  seleccionCt() {
    if (this.numeroClave == this.targetaClave.pin) {
      console.log("datos se seleccionCT", this.numeroClave, this.targetaClave.pin);
      this.datosFlujo.SetValidacionClave(true);
      
      this.router.navigate(['transacciont/selecciont']);
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La clave de la tarjeta es incorrecta!",
      });
    }
  }

  validarClave(): void {
    this.clave.validarClave(this.datosFlujo.GetTargeta(), this.numeroClave)
      .subscribe(
        (data) => {
          if (!data) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "El numero de la tarjeta es incorrecta!",
            });
          } else {
            this.claveEncontrada = data;
            console.log("Se encontro la tarjeta y clave", this.claveEncontrada);
            //this.flujoDato.SetTargeta(this.claveEncontrada);7
            this.router.navigate(['clave/panel-clave']);

          }
        },
        (error) => {
          console.log(this.numeroClave);
          console.error('Error al buscar la tarjeta', error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "El numero de la tarjeta es incorrecta!",
          });
        }
      );
  }
}
