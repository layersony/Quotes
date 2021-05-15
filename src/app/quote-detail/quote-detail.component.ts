import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote !: Quote;
  @Output() upV = new EventEmitter<number>();
  @Output() dwV = new EventEmitter<number>();
  
  vU:number = 0;
  vD:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  voteUp(){
    this.upV.emit(this.vU)
  }
  votedown(){
    this.dwV.emit(this.vD)
  }

}
