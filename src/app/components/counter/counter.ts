import { Component } from '@angular/core'
import { Button } from '../button/button'

@Component({
  selector: 'app-counter',
  imports: [
    Button,
  ],
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
