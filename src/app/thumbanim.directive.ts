import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[mlThumbanim]'
})
export class ThumbanimDirective {
  @HostBinding('class.pulse') get opened() {
    return this.isOpen;
  }
  @HostListener('mouseenter') open() {
    this.isOpen = true;
    // console.log("test");
  }
  @HostListener('mouseleave')  close() {
    this.isOpen = false;
  }
  private isOpen = false;

}
