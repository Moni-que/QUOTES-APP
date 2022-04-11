import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.textDecoration='highlight';
   }

}
