import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Header } from './components/header/header'
import { Counter } from './components/counter/counter'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Counter,
    Header,
  ],
  templateUrl: './app.html',
})
export class App {}
