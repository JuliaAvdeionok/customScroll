import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-horizontal-scroll-indicator',
  templateUrl: './horizontal-scroll-indicator.component.html',
  styleUrls: [ './horizontal-scroll-indicator.component.scss' ]
})

export class HorizontalScrollIndicatorComponent {
  scrollMaxValue: number;
  percentOfScroll: number;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  @HostListener('document:scroll', [])
  private onScroll(): void {
    this.scrollMaxValue = this.document.documentElement.offsetHeight - this.document.documentElement.clientHeight;
    const offset = this.document.documentElement.scrollTop;
    this.percentOfScroll = Math.round(100 * offset / this.scrollMaxValue);
  };
}
