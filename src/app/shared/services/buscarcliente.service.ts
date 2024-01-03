import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarclienteService {
url: string = '';
constructor(private http:HttpClient) { 
  this.url='http://34.102.85.160:8080/';
}
buscarCliente(tipoI : string,numeroIdentificacion : string):Observable<any>{
  let params = new HttpParams().set('tipo', tipoI).set('numero', numeroIdentificacion)
  return this.http.get<any>(this.url + "cliente/buscar", { params: params });
  
}
}
