import {Component, OnInit} from '@angular/core'
import * as moment from 'moment'
import {DateService} from '../../services/date.service'
import {BehaviorSubject} from 'rxjs'

@Component({
  selector: 'app-selector',
  template: `
    <p>
      <i class="material-icons" (click)="change(-1)">arrow_left</i>
        <span>{{date | async | moment}}</span>
      <i class="material-icons" (click)="change(1)">arrow_right</i>
    </p>
  `,
  styles: [`
    p {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        margin: 2rem 2rem;
        text-align: center;
        width: 200px;
        color: var(--light-color);
        font-size: 22px;
     }

    i {
        font-size: 35px;
        cursor: pointer;
        color: var(--accent-color);
        border: none;
    }
  `]
})

export class SelectorComponent implements OnInit {

  date: BehaviorSubject<moment.Moment>

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    this.date = this.dateService.date
  }

  change(dir: number): void {
    this.dateService.changeMonth(dir)
  }
}
