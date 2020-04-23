import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "";
  private taskObject = [];

  constructor() { }

  create(task: Task) {
    console.log("entrou no create task");
    this.taskObject.push(task);
    console.log(this.taskObject);
  }

  // read() {
  //   return this.taskObject;
  // }
}
