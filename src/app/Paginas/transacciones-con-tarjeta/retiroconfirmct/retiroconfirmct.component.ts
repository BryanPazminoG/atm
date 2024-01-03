import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';


@Component({
  selector: 'app-retiroconfirmct',
  templateUrl: './retiroconfirmct.component.html',
  styleUrls: ['./retiroconfirmct.component.css']
})
export class RetiroconfirmctComponent implements OnInit {
  valorRetiro: number = 0;
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

  constructor(private router: Router, private flujoDatos: FlujoDatosService) { }

  ngOnInit(): void {
    this.valorRetiro = this.flujoDatos.GetValorRetiro();
    this.cuentaData = this.flujoDatos.GetCuentaData();
    this.clientesData = this.flujoDatos.GetClientesData();
  }

  salida() {
    //this.router.navigate(['transacciont/salida']);
  }

}
