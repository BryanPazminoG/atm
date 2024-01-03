import { Component, OnInit } from '@angular/core';
import { BuscarcuentaService } from 'src/app/shared/services/buscarcuenta.service';
import { BuscarCuenta } from 'src/app/shared/interfaces/buscarcuenta';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';

@Component({
  selector: 'app-depositoconfirm',
  templateUrl: './depositoconfirm.component.html',
  styleUrls: ['./depositoconfirm.component.css']
})
export class DepositoconfirmComponent implements OnInit {
  valorDeposito: number = 0;

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

  constructor(private buscarcuentaservice: BuscarcuentaService, private flujoDatos: FlujoDatosService) {

  }
  ngOnInit(): void {
    this.valorDeposito = this.flujoDatos.GetCantidadDeposito();
    this.cuentaData = this.flujoDatos.GetCuentaData();
    this.clientesData = this.flujoDatos.GetClientesData();
  }
}
