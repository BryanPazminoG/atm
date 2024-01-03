import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarclienteService } from 'src/app/shared/services/buscarcliente.service';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pasaporte',
  templateUrl: './pasaporte.component.html',
  styleUrls: ['./pasaporte.component.css']
})
export class PasaporteComponent  {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroPasaporte: string = '';
  constructor(private router: Router, private servicioDato: FlujoDatosService, private validarExistenciaCliente: BuscarclienteService) {

  }

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroPasaporte = '';
    }
    else if (button === '✓') {
      this.validarExistenciaCliente.buscarCliente('PAS', this.numeroPasaporte).subscribe({
        next: (response) => {
        if(response!=null){
          this.servicioDato.SetNumeroPasaporte(this.numeroPasaporte);
          this.router.navigate(['tipos/cuenta']);
        }else {
          Swal.fire({
            icon: "error",
            title: "Identificacion incorrecta",
            text: "No se ha encontrado el pasaporte ingresado.",
          });
        }
          console.log(response);
        }
      }); //poque se usa apis
    }
    else {
      if (this.numeroPasaporte.length == 13) {
        return;
      }
      this.numeroPasaporte += button;
    }
  }
}
