import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'img[avatar]'
})
export class AvatarDirective {

  @Input() name = '';

  get element() {
    return this.elementRef?.nativeElement as HTMLImageElement;
  }

  constructor(private elementRef: ElementRef) { }

  @HostListener('error', ['$event'])
  onError() {
    if (this.element) {
      this.element.src = `https://ui-avatars.com/api/?format=svg&name=${this.name || 'Unknown'}&rounded=true&background=random&color=ffffff`;
    }
  }

}
