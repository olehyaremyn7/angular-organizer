import {Component, OnInit} from '@angular/core'
import {DateService} from '../../services/date.service'
import {BehaviorSubject} from 'rxjs'
import * as moment from 'moment'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {TasksService} from '../../services/tasks.service'
import {Task} from '../../interfaces/task.interface'
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})

export class OrganizerComponent implements OnInit {

  date: BehaviorSubject<moment.Moment>
  form: FormGroup
  tasks: Task[] = []

  constructor(private dateService: DateService,
              private tasksService: TasksService) {}

  ngOnInit(): void {
    this.date = this.dateService.date
    this.dateService.date.pipe(
      switchMap(value => this.tasksService.load((value)))
    ).subscribe(tasks => {
      this.tasks = tasks
    })
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }

  submit(): void {
    const {title} = this.form.value
    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    }

    this.tasksService.create(task).subscribe(task => {
      this.tasks.push(task)
      this.form.reset()
    }, error => alert(error))
  }

  remove(task: Task): void {
    this.tasksService.remove(task).subscribe(() =>  {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    }, error => alert(error))
  }
}
