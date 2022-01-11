import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { TASKS} from '../../monk-tasks'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  @Input() task: Task = TASKS [0];
  faTimes= faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
