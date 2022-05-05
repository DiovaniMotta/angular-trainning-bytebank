import { Transferencia } from './../services/model/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias : any[];

  constructor(private service: TransferenciaService){
      this.transferencias = service.listaTransferencias;
  }
  ngOnInit(): void {
    this.service.todas().subscribe((trans: Transferencia[]) =>{
      this.transferencias = trans;
    });
  }

}
