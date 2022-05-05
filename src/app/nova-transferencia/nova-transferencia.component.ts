import { Transferencia } from './../services/model/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output, Injectable } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  transferencia: Transferencia = {} as Transferencia;

  constructor(private service: TransferenciaService) {}

  @Output() aoTranferir = new EventEmitter<any>();


  transferir(): void {
    this.aoTranferir.emit(this.transferencia);
    this.service.adicionar(this.transferencia);
    this.limpar();
  }

  limpar() {
    this.transferencia.valor = 0;
    this.transferencia.destino = '';
  }
}
