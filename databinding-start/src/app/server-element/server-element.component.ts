import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChange, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('srvElement') element: {
    type: string,
    name:string,
    content: string
  }

  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  // @ViewChild('contentParagraph', {static: true}) paragraph: ElementRef;

  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called');
  }

  ngOnInit() {
    console.log('ngOnInit Called\n'+'Text Content of header : '
      + this.header.nativeElement.textContent
    + '\nText Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called\n' + 'Text Content of paragraph: ' + this.paragraph.nativeElement.textContent
    + '\nText Content of header : ' + this.header.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called\n' + 'Text Content of header : ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }
}
