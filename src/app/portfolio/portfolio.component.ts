import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @Input() dataShare:any;

  @Output() childInfo:any = new EventEmitter();
  
  onClick(){
    this.childInfo.emit("Message From Child");
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
