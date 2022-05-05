import { Transferencia } from './model/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private URL: string = 'http://localhost:3000/transferencias';

  listaTransferencias: any[];

  constructor(private httpClient : HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]>{
      return this.httpClient.get<Transferencia[]>(this.URL);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.listaTransferencias.push(transferencia);
    return this.httpClient.post<Transferencia>(this.URL, transferencia);
  }
}
