import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
import { faThumbsUp, faThumbsDown, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown=faThumbsDown;

  @Input() quote !: Quote;
  @Output() upV = new EventEmitter<number>();
  @Output() dwV = new EventEmitter<number>();
  @Output() todelete = new EventEmitter<boolean>();

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
  deletequote(todele:boolean){
    this.todelete.emit(todele)
  }
}
