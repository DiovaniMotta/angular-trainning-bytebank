import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-trainning-bytebank';

  transferencias: any[] = [];

  constructor(){

  }

  ngOnInit(): void {

  }


  recebeTransferencia($event: any) {
    this.transferencias.push($event);
  }
}
