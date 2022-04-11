import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    // new Quote ('QUOTES', 'AUTHOR', 'UPVOTE', 'DOWNVOTE', 'POINTS',)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
