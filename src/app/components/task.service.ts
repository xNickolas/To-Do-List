import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "";
  private taskObject = [];
  private taskObjectFinal;

  constructor() { }

  create(task: Task) {
    console.log("entrou no create task");
    this.taskObject.push(task);
    console.log(this.taskObject);
    // this.taskObjectFinal = Object.assign({}, this.taskObject);
    // console.log("final object", this.taskObjectFinal);
  } 

  read() {
    return this.taskObject;
  }

  delete(index){
    this.taskObject.splice(index,1);
  }

}
