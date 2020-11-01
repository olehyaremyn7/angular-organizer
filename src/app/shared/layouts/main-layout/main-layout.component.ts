import {Component} from '@angular/core'

@Component({
  selector: 'app-main-layout',
  template: `
    <div class="container">
      <header>
        <app-selector></app-selector>
      </header>
      <main>
        <app-calendar></app-calendar>
      </main>
      <div>
        <app-organizer></app-organizer>
      </div>
    </div>`,
  styles: [`
    header {
      padding: 1rem 2rem;
    }
  `]
})

export class MainLayoutComponent {}
