import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlujoDatosService {
  numeroIdentificacion: string = '';
  numeroRuc: string = '';
  numeroPasaporte: string = '';

constructor() { 

}
SetNumeroIdentificacion(datoIngresoNumI : string){
  this.numeroIdentificacion=datoIngresoNumI;
}

GetNumeroIdentificacion(){
  return this.numeroIdentificacion;
}

SetNumeroRuc(datoIngresoNumR : string){
  this.numeroRuc=datoIngresoNumR;
}

GetNumeroRuc(){
  return this.numeroRuc;
}

SetNumeroPasaporte(datoIngresoNumP : string){
  this.numeroPasaporte=datoIngresoNumP;
}

GetNumeroPasaporte(){
  return this.numeroPasaporte;
}

}
