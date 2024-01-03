import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlujoDatosService {
  numeroIdentificacion: string = '';
  numeroRuc: string = '';
  numeroPasaporte: string = '';
  tarjetaencontrada: any;
  clientesData: any;
  cuentaData: any;
  valorRetiro: number = 0;
  validacionClave: boolean = false;
 cantidadDeposito: number = 0;


  constructor() {

  }
  SetNumeroIdentificacion(datoIngresoNumI: string) {
    this.numeroIdentificacion = datoIngresoNumI;
  }

  GetNumeroIdentificacion() {
    return this.numeroIdentificacion;
  }

  SetNumeroRuc(datoIngresoNumR: string) {
    this.numeroRuc = datoIngresoNumR;
  }

  GetNumeroRuc() {
    return this.numeroRuc;
  }

  SetNumeroPasaporte(datoIngresoNumP: string) {
    this.numeroPasaporte = datoIngresoNumP;
  }

  GetNumeroPasaporte() {
    return this.numeroPasaporte;
  }
  SetTargeta(tarjetaencontrada: any) {
    this.tarjetaencontrada = tarjetaencontrada;
  }

  GetTargeta() {
    return this.tarjetaencontrada;
  }
  SetClientesData(clientesData: any) {
    this.clientesData = clientesData;
  }

  GetClientesData() {
    return this.clientesData;
  }
  SetCuentaData(cuentaData: any) {
    this.cuentaData = cuentaData;
  }
  SetValidacionClave(validacionClave: boolean) {
    this.validacionClave = validacionClave;
  }
  GetValidacionClave(): Observable<boolean> {
    return of(this.validacionClave);
  }
  GetCuentaData() {
    return this.cuentaData;
  }
  SetValorRetiro(valorRetiro: number) {
    this.valorRetiro = valorRetiro;
  }
  GetValorRetiro() {
    return this.valorRetiro;
  }
  SetCantidadDeposito(datoIngresoCantD : number){
    this.cantidadDeposito=datoIngresoCantD;
  }
  
  GetCantidadDeposito(){
    return this.cantidadDeposito;
  }
}
