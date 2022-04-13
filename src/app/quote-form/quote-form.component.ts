import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  // downVote(index:number){
  //   this.quotes[index].downVotes < 0) this.quotes[index].downvotes = 0;
  // }

  newQuote = new Quote("",0,0,"");
  @Output()addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote)
    this.newQuote=new Quote("",0,0,"");
  }
  // deleteQote(complete: boolean){
  //   this.isComplete.emit(complete)
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
