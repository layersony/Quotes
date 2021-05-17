import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Quote } from '../quote'
import { faThumbsUp, faThumbsDown, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faThumbsDown=faThumbsDown;
  faQuoteLeft = faQuoteLeft;
  
  quotearr: Quote[] = [
    new Quote(1, 'Spiritual', 'I have so much to do that I shall spend the first three hours in prayer.', 'Martin Luther', 33, 20, 'Maingi', new Date(2020,1,1)),
    new Quote(2, 'trial2', 'trialtrialtrial2222222', 'long list of trial2', 75, 12, 'Maingi', new Date(2020,1,1)),
    new Quote(3, 'trial3', 'trialtrialtrial33333333', 'long list of trial3', 54, 76, 'Maingi', new Date(2020,1,1))
  ]

  highest: boolean = false

  
  constructor() { }

  ngOnInit(): void {
    this.maxvalue(this.quotearr)
  }

  showDetail(index:number){
    this.quotearr[index].showquotes = !this.quotearr[index].showquotes;
  }

  addquote(event:any){
    let quotelength = this.quotearr.length;
    event.id = quotelength+1;
    event.dateupload = new Date(event.dateupload)
    this.quotearr.push(event);
  }

  upVt(event:number, index:number){
    let addvote = this.quotearr[index].upvote + 1;
    this.quotearr[index].upvote = addvote;
  }
  dwVt(event:number, index:number){
    let dwvote = this.quotearr[index].downvote + 1;
    this.quotearr[index].downvote = dwvote;
  }
  todeleQuote(todele:boolean, index:number){
    if (todele){
      let deleteQuote = confirm(`Are you sure you want to delete --> ${this.quotearr[index].title}`);
      if (deleteQuote){
        this.quotearr.splice(index,1);
      }
    }
  }


  maxvalue(arr:any){
    let fun = Number.MIN_VALUE;
    let arrnum = 0

    for (let i=0; i<arr.length;i++){
      if(arr[i].upvote>fun){
        fun = arr[i].upvote
        arrnum = i
        if (this.highest == false){
          this.checkitout
        }
      }
    }
    return arrnum;
  }

  checkitout(){
    this.highest = !this.highest;
  }
}
