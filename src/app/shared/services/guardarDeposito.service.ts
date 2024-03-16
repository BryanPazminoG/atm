import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarDepositoService {
url: string =''; 
constructor(private http: HttpClient) {
  this.url = 'http://35.232.62.178:8080/api/v1/transacciones';
}
guardarDeposito(registroDeposito: any): Observable<any> {
  return this.http.post<any>(this.url + "/depositos", registroDeposito);
}

}
