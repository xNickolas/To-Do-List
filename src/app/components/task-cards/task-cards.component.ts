import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.css']
})
export class TaskCardsComponent implements OnInit {

  edit = false;
  tasks: any;
  status:boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.readTask();

  }

  readTask() {
    this.tasks = this.taskService.read();
    console.log(this.tasks);
  }

  deleteTask(index) {
    this.taskService.delete(index);
    this.readTask();
    // let index = event.target.id;
    // this.tasks.splice(index, 1);
    // this.tasks.length = 0;
  }

  editTask() {
    this.edit = true;
    console.log("taks updated")
    // this.editDescription = !this.editDescription;
    // index.description = !index.description;

  }

  check(tasks){
    tasks.status = !tasks.status;
  }


  // public sendTask(input:any) : void {
  //   this.tasks.push(input.tasks)
  // }

}
