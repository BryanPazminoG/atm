import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BuscarcuentaService {
url: string =''; 
  constructor(private http:HttpClient) {
    this.url='http://35.192.152.130:8089/api/v1/cuentas/';
   }
   buscarcuenta(numeroCuenta : string):Observable<any> {
    return this.http.get<any>(this.url + "numero/"+ numeroCuenta);
   }
   buscarcuentaById(codCuenta : number):Observable<any> {
    return this.http.get<any>(this.url + codCuenta);
   }
   TransaccionRetiro(RegistroRetiro : any):Observable<any> {
    return this.http.post<any>(this.url + "retiros/", RegistroRetiro); 
   }
}
