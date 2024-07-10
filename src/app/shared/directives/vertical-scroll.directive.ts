import { Directive, HostListener} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[verticalScroll]',
})
export class VerticalScrollDirective {

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!event.deltaY) {
      return;
    }

    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
      event.preventDefault();
    }
  }

}
