import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarDepositoService {
url: string =''; 
  constructor(private http:HttpClient) {
    this.url='http://35.192.152.130:8089/api/v1/transacciones';
   }
   guardarDeposito(registroDeposito : any):Observable<any> {
    return this.http.post<any>(this.url + "/depositos", registroDeposito);
   }

}
