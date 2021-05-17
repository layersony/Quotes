import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { faQuoteLeft, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  faHeart = faHeart;
  faHeartBroken=faHeartBroken;
  faQuoteLeft = faQuoteLeft;
  
  quotearr: Quote[] = [
    new Quote(1, 'Spiritual', 'I have so much to do that I shall spend the first three hours in prayer.', 'Martin Luther', 15, 6, 'Maingi', new Date("Sun May 16 2021 12:29:52 GMT+0300 (East Africa Time)")),
    new Quote(2, 'Life', "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best", 'Marilyn Monroe', 20, 12, 'Scarlet', new Date("Mon May 17 2021 18:45:52 GMT+0300 (East Africa Time)")),
    new Quote(3, 'Success', "I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time", 'Herbert Bayard Swope', 11, 32, 'Stella', new Date("Mon May 17 2021 11:55:52 GMT+0300 (East Africa Time)"))
  ]

  highest: boolean = false

  public show:boolean = false;
  public hide:boolean= true
  public buttonName:any = 'Show';
  public hidequote:any = 'hide'

  constructor() { }

  ngOnInit(): void {
    this.maxvalue()
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


  maxvalue(){
    let fun = Number.MIN_VALUE;
    let arr = this.quotearr

    for (let i=0; i<arr.length;i++){
      if(arr[i].upvote>fun){
        fun = arr[i].upvote
      }
    }
    return fun;
  }



  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;

    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";

    if(this.hide)
      this.hidequote = 'Show';
    else(this.hide)
      this.hidequote = 'hide'
  }
}
