import { Component } from '@angular/core';

@Component({
  selector: 'app-countervalue',
  template: `
  <h1>{{ count }}</h1>
  <button (click)="increment()">Increment</button>
`,
})
export class CountervalueComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
