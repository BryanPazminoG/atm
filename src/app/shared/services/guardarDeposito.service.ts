import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarDepositoService {
url: string =''; 
  constructor(private http:HttpClient) {
    this.url='http://34.125.120.215:8080/';
   }
   guardarDeposito(registroDeposito : any):Observable<any> {
    return this.http.post<any>(this.url + "transaccion/depositar-monto", registroDeposito);
   }

}
