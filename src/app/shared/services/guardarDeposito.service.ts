import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarDepositoService {
url: string =''; 
constructor(private http: HttpClient) {
  this.url = 'https://cuentas-atnhilz3dq-uc.a.run.app/api/v1/transacciones';
}
guardarDeposito(registroDeposito: any): Observable<any> {
  console.log(registroDeposito);
  return this.http.post<any>(this.url + "/depositos", registroDeposito);
}

}
