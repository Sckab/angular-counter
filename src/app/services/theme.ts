import { Injectable, inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Theme } from '../types/theme'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT)

  theme: Theme = 'system'
  isDarkMode = false

  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  constructor() {
    this.applyTheme()

    this.mediaQuery.addEventListener('change', () => {
      if (this.theme === 'system') {
        this.applyTheme()
      }
    })
  }

  toggleTheme() {
    this.theme =
      this.theme === 'system'
        ? 'dark'
        : this.theme === 'dark'
          ? 'light'
          : 'system'

    this.applyTheme()
  }

  private applyTheme() {
    const html = this.document.documentElement

    if (this.theme === 'dark') {
      this.isDarkMode = true
      html.classList.add('dark')
    } else if (this.theme === 'light') {
      this.isDarkMode = false
      html.classList.remove('dark')
    } else {
      this.isDarkMode = this.mediaQuery.matches
      html.classList.toggle('dark', this.isDarkMode)
    }

    console.log('theme: ', this.theme)
  }
}
