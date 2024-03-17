import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarclienteService {
url: string = '';
constructor(private http:HttpClient) { 
  this.url='http://34.123.168.16:8080/api/v1/clientes/naturales/';
}
buscarCliente(tipoI : string,numeroIdentificacion : string):Observable<any>{
  let params = new HttpParams().set('tipo', tipoI).set('numero', numeroIdentificacion)
  return this.http.get<any>(this.url , { params: params });
}
buscarClienteById(codCliente: any):Observable<any>{
  const url = `${this.url}${codCliente}`;
    return this.http.get<any>(url);
}
} 
