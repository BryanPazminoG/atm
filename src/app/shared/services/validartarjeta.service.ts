import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidartarjetaService {

  private validarTarjeta = "http://localhost:8080/tarjeta/buscar-tarjeta";

  constructor(private http: HttpClient) { }

  validarNumeroTarjeta(numero: string): Observable<any> {
    // let params = new HttpParams().set('numeroTarjeta', numero);
    // return this.http.get<any>(this.validarTarjeta, {params: params});
    let params = new HttpParams().set('numero', numero);
    return this.http.get<any>(this.validarTarjeta, {params: params});
  }
}
