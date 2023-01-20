import {Component, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-async-promise-pipe',
  templateUrl: 'async-promise-pipe.component.html'
})

export class AsyncPromisePipeComponent {

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  object2: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);
  a: number = 10;
  b: number = 2000;
  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
}

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: number = 10): string {
    return String(Math.pow(value, exponent));
  }
}

@Pipe({name: 'afterText'})
export class AfterText implements PipeTransform {
  transform(value: any, text: string = ' needs to be paid.'): string {
    return text;
  }
}
