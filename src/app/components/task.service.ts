import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "";
  private taskObject = [];
  private taskObjectFinal;
  private id: number = 1;

  constructor() { }

  create(task: Task) {
    console.log("entrou no create task");
    task.id = this.id++;
    this.taskObject.push(task);
    console.log(this.taskObject);
    // this.taskObjectFinal = Object.assign({}, this.taskObject);
    // console.log("final object", this.taskObjectFinal);
  } 

  read() {
    return this.taskObject;
  }

  delete(id){
    this.taskObject = this.taskObject.filter(task => task.id !== id )
    return this.taskObject;
    // this.taskObject.splice(index,1);
  }

}
