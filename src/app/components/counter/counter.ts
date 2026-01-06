import { Component } from '@angular/core'

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
})
export class Counter {
  number: number = 0

  increment() {
    this.number++
  }

  decrement() {
    this.number--
  }

  reset() {
    this.number = 0
  }
}
