import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[appDynamicTranslation]',
  standalone: true
})
export class DynamicTranslationDirective implements OnInit {

  @Input('appDynamicTranslation') key: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get(this.key).subscribe((res: string) => {
      this.renderer.setProperty(this.el.nativeElement, 'innerText', res);
    });
  }

}
