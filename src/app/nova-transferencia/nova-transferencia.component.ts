import { Transferencia } from './../services/model/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  transferencia: Transferencia = {} as Transferencia;

  constructor(private service: TransferenciaService, private router : Router) {}

  @Output() aoTranferir = new EventEmitter<any>();


  transferir(): void {
    this.aoTranferir.emit(this.transferencia);
    this.service.adicionar(this.transferencia).subscribe(
      (resultado)=> {
        console.log(resultado);
        this.limpar();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limpar() {
    this.transferencia.valor = 0;
    this.transferencia.destino = '';
  }
}
