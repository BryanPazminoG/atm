import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarclienteService } from 'src/app/shared/services/buscarcliente.service';
import { BuscarcuentaService } from 'src/app/shared/services/buscarcuenta.service';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';


@Component({
  selector: 'app-selecciont',
  templateUrl: './selecciont.component.html',
  styleUrls: ['./selecciont.component.css']
})
export class SelecciontComponent implements OnInit {

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
  targetaData = {
    "codCuenta": 0,
  };
  constructor(private router: Router, private flujoDatos:FlujoDatosService, private cuentaService:BuscarcuentaService, private clienteService:BuscarclienteService) { }
  
  ngOnInit(): void {
    this.targetaData = this.flujoDatos.GetTargeta();
    this.getCuenta();
  }
  getCuenta(){
    if(this.targetaData.codCuenta != 0){
      this.cuentaService.buscarcuentaById(this.targetaData.codCuenta).subscribe(
        {
          next: (response) => {
            if(response!=null){
              this.cuentaData = response;
              this.flujoDatos.SetCuentaData(this.cuentaData);
              this.getCliente();
            }
          }
        }
      );
    }
  }
  getCliente(){
    if(this.targetaData.codCuenta != 0){
      this.clienteService.buscarClienteById(this.cuentaData.codCliente).subscribe(
        {
          next: (response) => {
            if(response!=null){
              this.clientesData = response;
              this.flujoDatos.SetClientesData(this.clientesData);
            }
          }
        }
      );
    }
  }
  retiros() {
    this.router.navigate(['transacciont/cantidadretiro']);
  }
  consultas() {
    this.router.navigate(['transacciont/consultas']);
  }
}
 