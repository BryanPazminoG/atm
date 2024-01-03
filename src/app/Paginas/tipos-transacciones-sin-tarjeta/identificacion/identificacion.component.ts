import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarclienteService } from 'src/app/shared/services/buscarcliente.service';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent {
  buttons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '✓'];
  numeroIdentificacion: string = '';
  constructor(private router: Router, private servicioDato: FlujoDatosService, private validarExistenciaCliente: BuscarclienteService) {

  }

  processButton(button: string): void {
    if (button === 'X') {
      this.numeroIdentificacion = '';
    }
    else if (button === '✓') {
      this.validarExistenciaCliente.buscarCliente('CED', this.numeroIdentificacion).subscribe({
        next: (response) => {
        if(response!=null){
          this.servicioDato.SetNumeroIdentificacion(this.numeroIdentificacion);
          this.router.navigate(['tipos/cuenta']);
        }else {
          Swal.fire({
            icon: "error",
            title: "Identificacion incorrecta",
            text: "No se ha encontrado la cedula ingresada.",
          });
        }
          console.log(response);
        }
      }); 
      
    }
    else {
      if (this.numeroIdentificacion.length == 10) {
        return;
      }
      this.numeroIdentificacion += button;
    }
  }
}



