import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarclienteService {
url: string = '';
constructor(private http:HttpClient) { 
  this.url='https://clientes-atnhilz3dq-rj.a.run.app/api/v1/clientes/';
}
buscarCliente(tipoI : string,numeroIdentificacion : string):Observable<any>{
  let params = new HttpParams().set('tipo', tipoI).set('numero', numeroIdentificacion)
  return this.http.get<any>(this.url , { params: params });
}
buscarClienteById(codCliente: number):Observable<any>{
  const url = `${this.url}${codCliente}`;
    return this.http.get<any>(url);
}
} 
