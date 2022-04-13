import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {
  @Input()
  quote!: Quote;

  @Output() isComplete = new EventEmitter<boolean>();

  deleteQuote(read: boolean) {
    this.isComplete.emit(read);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
