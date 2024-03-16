import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarClaveService {
  private validarClaveUrl = "http://127.0.0.1:8080/api/v1/seguridad-tarjeta/sesion";

  constructor(private http: HttpClient) { }

  validarClave(numeroTarjeta: string, claveTarjeta: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      numTarjeta: numeroTarjeta,
      claveTarjeta: claveTarjeta
    };

    return this.http.post<any>(this.validarClaveUrl, body, { headers });
    
  }
}
