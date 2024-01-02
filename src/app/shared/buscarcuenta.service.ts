import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BuscarcuentaService {
url: string =''; 
  constructor(private http:HttpClient) {
    this.url='http://localhost:8080/';
   }
   burcarcuenta(id : string):Observable<any> {
    return this.http.get<any>(this.url + "cuenta/buscar/"+id);
   }


   //buscarClientePorParametros(tipo: string, numero: string): Observable<any> {
  //   let params = new HttpParams().set('tipo', tipo).set('numero', numero);
  //   return this.http.get<any>(this.buscarClienteApi, { params: params });
  // }
}
