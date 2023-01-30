import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = '#dcdcdc';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elmRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseHover(eventData: Event) {
    // this.renderer.setStyle(this.elmRef, 'background-color', '#767676');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elmRef, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
