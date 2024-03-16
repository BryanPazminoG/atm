import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidartarjetaService {

  private validarTarjeta = "http://35.232.62.178:8080/api/v1/tarjetas/credenciales";

  constructor(private http: HttpClient) { }

  validarNumeroTarjeta(numero: string): Observable<any> {
    
    const url = `${this.validarTarjeta}/${numero}`;
    return this.http.get<any>(url);
  }
}