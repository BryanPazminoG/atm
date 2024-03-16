import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BuscarcuentaService {
url: string =''; 
urlt: string =''; 

  constructor(private http:HttpClient) {
    this.url='http://35.232.62.178:8080/api/v1/cuentas/'; 
    this.urlt='http://35.232.62.178:8080/api/v1/transacciones/'; 
   }
   buscarcuenta(numeroCuenta: string): Observable<any> {
    const urlWithParams = `${this.url}?numeroCuenta=${numeroCuenta}`;
    return this.http.get<any>(urlWithParams);
  }
   
   buscarcuentaById(codCuenta : number):Observable<any> {
    const url = `${this.url}${codCuenta}`;
    return this.http.get<any>(url);    
   }

   TransaccionRetiro(RegistroRetiro : any):Observable<any> {
    console.log(RegistroRetiro);
    return this.http.put<any>(this.urlt + "retiros", RegistroRetiro); 
   }

}
