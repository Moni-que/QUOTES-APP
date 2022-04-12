import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote('Start writing, no matter what. The water does not flow until the faucet is turned on.', 100, 0,'Louis LAmour'),
    new Quote('Get it down. Take chances. It may be bad, but it is the only way you can do anything really good.', 60, 0,'William Faulkner'),
    new Quote('The first draft is just you telling yourself the story.', 50, 0,'Terry Pratchett'),
    new Quote('You do not start out writing good stuff. You start out writing crap and thinking it is good stuff, and then gradually you get better at it.', 30, 0,'Octavia E. Butler'),
    new Quote('Start before you are ready.', 20, 0,'Steven Pressfield')
  ];
  myarr: number[]=this.quotes.map(quote=>quote.UPVOTES)
  highest= Math.max(...this.myarr)
  constructor() { }

  ngOnInit(): void {
  }

}
