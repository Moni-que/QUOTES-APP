import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective {

  constructor() { 
    // this.elem.nativeElement.style.textDecoration='highlight';
   }

}
