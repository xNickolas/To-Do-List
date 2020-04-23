import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() sendTask = new EventEmitter<any>();
  
  public input:any = {
    id: 0,
    description: '',
    status: false
  };

  constructor(private taskService: TaskService) { }
  
  ngOnInit(): void {
  }

  getTask() {
    console.log(this.taskService.create(this.input));
    //console.log(this.sendTask.emit(this.input));
  }
}
