import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarclienteService } from 'src/app/shared/services/buscarcliente.service';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ruc',
  templateUrl: './ruc.component.html',
  styleUrls: ['./ruc.component.css']
})
export class RucComponent  {

  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroRuc: string = '';
  constructor(private router: Router, private servicioDato: FlujoDatosService, private validarExistenciaCliente: BuscarclienteService) {

  }

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroRuc = '';
    }
    else if (button === '✓') {
      this.validarExistenciaCliente.buscarCliente('RUC', this.numeroRuc).subscribe({
        next: (response) => {
        if(response!=null){
          this.servicioDato.SetNumeroIdentificacion(this.numeroRuc);
        }else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
          console.log(response);
        }
      }); //poque se usa apis
      this.router.navigate(['tipos/cuenta']);
    }
    else {
      if (this.numeroRuc.length == 13) {
        return;
      }
      this.numeroRuc += button;
    }
  }

}
