import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotearr: Quote[] = [
    new Quote(1, 'trial', 'trialtrialtrial', 'long list of trial', 33, 20, 'Maingi', new Date(2020,1,1)),
    new Quote(2, 'trial2', 'trialtrialtrial2222222', 'long list of trial2', 75, 12, 'Maingi', new Date(2020,1,1)),
    new Quote(3, 'trial3', 'trialtrialtrial33333333', 'long list of trial3', 75, 12, 'Maingi', new Date(2020,1,1))
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(index:number){
    this.quotearr[index].showquotes = !this.quotearr[index].showquotes;
    console.log(this.quotearr[index])
  }
  
}
