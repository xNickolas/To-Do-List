import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() sendTask = new EventEmitter<any>();
  
  public input:any = {};

  getTask() {
    console.log(this.sendTask.emit(this.input));
    console.log(this.input);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
