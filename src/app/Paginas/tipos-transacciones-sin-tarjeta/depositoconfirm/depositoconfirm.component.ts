import { Component, OnInit } from '@angular/core';
import { BuscarcuentaService } from 'src/app/shared/services/buscarcuenta.service';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';
import { BuscarclienteService } from 'src/app/shared/services/buscarcliente.service';
import { Router } from '@angular/router';

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
      private clienteService: BuscarclienteService 
    ) { }

  ngOnInit(): void {
    this.valorDeposito = this.flujoDatos.GetCantidadDeposito();
    this.numeroCuenta = this.flujoDatos.GetNumeroCuenta();
    this.clientesData = this.flujoDatos.GetClientesData();
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
  continuar(){
    this.router.navigate(['tipos/comprobantedepositos']);
  }
  regresar(){
    this.router.navigate(['tipos/cantidad']);
  }
}
