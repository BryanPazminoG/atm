import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarcuentaService } from 'src/app/shared/services/buscarcuenta.service';
import { FlujoDatosService } from 'src/app/shared/services/flujoDatos.service';


@Component({
  selector: 'app-retiroconfirmct',
  templateUrl: './retiroconfirmct.component.html',
  styleUrls: ['./retiroconfirmct.component.css']
})
export class RetiroconfirmctComponent implements OnInit {
  valorRetiro: number = 0;
  fechaRetiro: string = "";
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

  constructor(private router: Router, private flujoDatos: FlujoDatosService, private cuentaService: BuscarcuentaService) { }

  ngOnInit(): void {
    this.valorRetiro = this.flujoDatos.GetValorRetiro();
    this.cuentaData = this.flujoDatos.GetCuentaData();
    this.clientesData = this.flujoDatos.GetClientesData();
  }

  convertirFechaAString(fecha: Date) {
    // Obtén los componentes de la fecha
    const año = fecha.getFullYear();
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2); // Se agrega 1 porque los meses comienzan desde 0
    const dia = ('0' + fecha.getDate()).slice(-2);
    const horas = ('0' + fecha.getHours()).slice(-2);
    const minutos = ('0' + fecha.getMinutes()).slice(-2);
    const segundos = ('0' + fecha.getSeconds()).slice(-2);

    const cadenaFecha = `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;

    return cadenaFecha;
  }
  salida() {
    this.fechaRetiro = this.convertirFechaAString(new Date());
    let retiroRegistro = {
        "codCuenta": this.cuentaData.codCuenta,
        "valorHaber": this.valorRetiro,
        "canal": "ATM",
      };
    
    console.log(retiroRegistro);
    this.cuentaService.TransaccionRetiro(retiroRegistro).subscribe({
      next: () => {
        this.flujoDatos.SetFechaRetiro(this.fechaRetiro);
        this.router.navigate(['transacciont/salida']);
      },
      error: (error) => {
        console.error('Error al realizar la transacción de retiro:', error);
      }
    });
    // salida() {
    //   this.fechaRetiro = this.convertirFechaAString(new Date());
      
    //           let retiroRegistro = {
    //             "codCuenta": this.cuentaData.codCuenta,
    //             "valorHaber": this.valorRetiro,
    //             "canal": "ATM",
    //           };
    
    //           console.log(retiroRegistro);
    
    //           this.cuentaService.TransaccionRetiro(retiroRegistro).subscribe({
    //             next: () => {
    //               this.router.navigate(['transacciont/salida']);
    //             },
    //             error: (error) => {
    //               console.error('Error al realizar la transacción de retiro:', error);
    //             }
    //           });
            
             }

  volver() {
    this.router.navigate(['transacciont/cantidadretiro']);
  }

}
