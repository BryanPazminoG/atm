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
    "codTarjeta": "",
    "codCuenta":0
  };
  constructor(private router: Router, private flujoDatos:FlujoDatosService, private cuentaService:BuscarcuentaService, private clienteService:BuscarclienteService) { }
  
  ngOnInit(): void {
    this.targetaData.codTarjeta = this.flujoDatos.GetTargeta();
    console.log(this.targetaData);
    this.getDatosTarjeta();
    console.log(this.getCuenta);
  }
  getCuenta(){
    console.log("codigo cuentaaa: ", this.targetaData.codCuenta);
    if(this.targetaData.codCuenta != 0){
      this.cuentaService.buscarcuentaById(this.targetaData.codCuenta).subscribe(
        {
          next: (response) => {
            if(response!=null){
              this.cuentaData = response;
              this.flujoDatos.SetCuentaData(this.cuentaData);
              console.log(this.cuentaData);
              console.log(this.flujoDatos);
              this.getCliente(); 
              localStorage.setItem("codCliente", response!.codCliente);
             console.log("codCliente", response!.codCliente);
            }
          }
        }
      );
    }
  }
  getCliente(){
    const codcliente = localStorage.getItem("codCliente");
    if(this.targetaData.codCuenta != 0){
      const codclienten = codcliente;

  this.clienteService.buscarClienteById(codclienten).subscribe(
        {
          next: (response) => {
            if(response!=null){
              this.clientesData = response;
              this.flujoDatos.SetClientesData(this.clientesData);
              console.log(this.clientesData);
              console.log( this.flujoDatos);
              localStorage.setItem("codCuenta", response);
            }
          }
        }
      );
    }
  }
  getDatosTarjeta(){
    this.cuentaService.buscarDatosTarjeta(this.targetaData.codTarjeta).subscribe(
    {
      next: (Response)=> {
        if(Response!=null){
          this.targetaData.codCuenta=Response.codCuenta;
          this.getCuenta();
        }
      }
    }
    );
  }
  


  retiros() {
    this.router.navigate(['transacciont/cantidadretiro']);
  }
  consultas() {
    this.router.navigate(['transacciont/consultas']);
  }
}
 