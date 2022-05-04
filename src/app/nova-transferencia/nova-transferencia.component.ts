import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit  {

  valor: number = 0;
  destino: number = 0;

  ngOnInit(): void {

  }

@Output() aoTranferir = new EventEmitter<any>();


  transferir() : void {
    console.log('Solicitado nova transferência');
    console.log('Valor ->'+this.valor);
    console.log('Destino ->'+ this.destino);
    this.aoTranferir.emit({valor : this.valor, destino: this.destino});
  }
}
