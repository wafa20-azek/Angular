import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  constructor(private elemnt: ElementRef) {
    //this.elemnt.nativeElement.style.color = 'red';
  }
  @HostListener('mouseenter') mouseEnter() {
    this.elemnt.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.elemnt.nativeElement.style.color = 'black';
  }
}
