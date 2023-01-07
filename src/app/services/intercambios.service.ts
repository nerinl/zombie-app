import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercambiosService {
  private url: string; 

  constructor(
    private http: HttpClient
    ) { 
      this.url = "http://localhost:5000/api/v1/";
    }
postSetTrade(trade: any){
  return this.http.post(this.url + `trades/setTrade/`, trade);
}
}


export interface Intercambio{
  _id: String,
  idSolicita: string,
  usernameSolicita: string,
  idSolicitado: string,
  usernameSolicitado: string,
  aguaSolicita: Number,
  comidaSolicita: Number
  medicamentoSolicita: Number,
  municionSolicita: Number,
  aguaSolicitado: Number,
  comidaSolicitado: Number
  medicamentoSolicitado: Number,
  municionSolicitado: Number,
  nombreSolicita: string,
  nombreSolicitado: string,
  aprobado: Boolean

}