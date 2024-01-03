import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BuscarcuentaService {
url: string =''; 
  constructor(private http:HttpClient) {
    this.url='http://34.125.120.215:8080/';
   }
   buscarcuenta(numeroCuenta : string):Observable<any> {
    return this.http.get<any>(this.url + "cuenta/buscar/"+ numeroCuenta);
   }
   buscarcuentaById(codCuenta : number):Observable<any> {
    return this.http.get<any>(this.url + "cuenta/getbyid/"+ codCuenta);
   }
}
