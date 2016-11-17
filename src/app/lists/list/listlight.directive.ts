import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[mlListlight]'
})
export class ListlightDirective {
  @HostBinding('class.highlight') get opened() {
    return this.isOpen;
  }
  @HostListener('mouseenter') open() {
    this.isOpen = true;
  }
  @HostListener('mouseleave')  close() {
    this.isOpen = false;
  }
  private isOpen = false;

}
