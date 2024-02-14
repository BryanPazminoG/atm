import { Component, OnInit } from '@angular/core';
import { BuscarcuentaService } from 'src/app/shared/services/buscarcuenta.service';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';
import { BuscarclienteService } from 'src/app/shared/services/buscarcliente.service';
import { Router } from '@angular/router';
import { GuardarDepositoService } from 'src/app/shared/services/guardarDeposito.service';

@Component({
  selector: 'app-depositoconfirm',
  templateUrl: './depositoconfirm.component.html',
  styleUrls: ['./depositoconfirm.component.css']
})
export class DepositoconfirmComponent implements OnInit {
  valorDeposito: number = 0;
  fechaDeposito: string = "";
  numeroCuenta: string = ''; // Agrega la declaración de la variable numeroCuenta

  clientesData = {
    "codigo": 5,
    "apellidos": "Toapanta",
    "nombres": "Edison Javier",
  };

  cuentaData = {
    "codCuenta": 0,
    "numeroCuenta": "",
    "codTipoCuenta": "",
    "codCliente": 0,
    "saldoContable": 0,
    "saldoDisponible": 0,
  };

constructor(
      private router: Router,
      private flujoDatos: FlujoDatosService,
      private cuentaService: BuscarcuentaService,
      private clienteService: BuscarclienteService,
      private guardarDeposito: GuardarDepositoService
    ) { }

  ngOnInit(): void {
    this.valorDeposito = this.flujoDatos.GetCantidadDeposito();
    this.numeroCuenta = this.flujoDatos.GetNumeroCuenta();
    this.clientesData = this.flujoDatos.GetClientesData();
  
    console.log("fechadeposito", this.flujoDatos.GetFechaDeposito());
    this.getCuenta();
  }

  getCuenta() {
    this.cuentaService.buscarcuenta(this.numeroCuenta).subscribe({
      next: (response) => {
        if (response != null) {
          this.cuentaData = response;
          this.flujoDatos.SetNumeroCuenta(this.numeroCuenta);
          this.flujoDatos.SetCuentaData(this.cuentaData);
          this.getCliente();
        }
      }
    });
  }

  getCliente() {
    this.clienteService.buscarClienteById(this.cuentaData.codCliente).subscribe({
      next: (response) => {
        if (response != null) {
          this.clientesData = response;
          this.flujoDatos.SetClientesData(this.clientesData);
        }
      }
    });
  }
  regresar(){
    this.router.navigate(['tipos/cantidad']);
  }

  convertirFechaAString(fecha: Date) {
    // Obtén los componentes de la fecha
    const año = fecha.getFullYear();
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2); // Se agrega 1 porque los meses comienzan desde 0
    const dia = ('0' + fecha.getDate()).slice(-2);
    const horas = ('0' + fecha.getHours()).slice(-2);
    const minutos = ('0' + fecha.getMinutes()).slice(-2);
    const segundos = ('0' + fecha.getSeconds()).slice(-2);

    // Formatea la cadena de fecha
    const cadenaFecha = `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;

    return cadenaFecha;
  }
  salida() {
    this.fechaDeposito = (new Date()).toString();
    let registroDeposito = {
      "numeroCuenta": this.numeroCuenta,
      "valorDebe": this.valorDeposito,
      "fechaCreacion": this.fechaDeposito
  }
console.log(registroDeposito);
    this.guardarDeposito.guardarDeposito(registroDeposito).subscribe(
      {
        next: (response) => {
          if (response != null) {
            this.router.navigate(['tipos/comprobantedepositos']);
          }
        }
      }
    );
  }
}
