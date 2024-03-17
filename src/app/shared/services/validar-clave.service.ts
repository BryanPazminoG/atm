import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarClaveService {
  private validarClaveUrl = "https://seg-tarjetas-atnhilz3dq-uc.a.run.app/api/v1/seguridad-tarjeta/sesion";

  constructor(private http: HttpClient) { }

  validarClave(numeroTarjeta: string, claveTarjeta: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      numTarjeta: numeroTarjeta,
      claveTarjeta: claveTarjeta
    };
console.log("se ejecuta validar clave", body);
    return this.http.post<any>(this.validarClaveUrl, body, { headers });
    
  }
}
