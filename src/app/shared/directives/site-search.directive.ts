import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appSiteSearch]',
  standalone: true
})
export class SiteSearchDirective {

  @Output() searchChange = new EventEmitter<string>();

  constructor(private el: ElementRef) { 
    this.el.nativeElement.onkeyup = (event: any) => {
      this.searchChange.emit(event.target.value);
    };
  }

}
