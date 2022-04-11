import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote('Start writing, no matter what. The water does not flow until the faucet is turned on.', 0, 0,'Louis LAmour', 100),
    new Quote('Get it down. Take chances. It may be bad, but it is the only way you can do anything really good.', 0, 0,'William Faulkner', 80),
    new Quote('The first draft is just you telling yourself the story.', 0, 0,'Terry Pratchett', 50),
    new Quote('You do not start out writing good stuff. You start out writing crap and thinking it is good stuff, and then gradually you get better at it.', 0, 0,'Octavia E. Butler', 30),
    new Quote('Start before you are ready.', 0, 0,'Steven Pressfield', 20)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
