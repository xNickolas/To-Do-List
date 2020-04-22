import { Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() sendTask = new EventEmitter();
  
  public task:any;

  constructor() { }

  ngOnInit(): void {
  }

  getTask(event): void{
    this.task = event.target.value;
    this.sendTask.emit(this.task);
  }
}
