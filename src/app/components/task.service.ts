import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "";
  private taskObject: Task;

  constructor() { }

  create(task: Task) {
    return this.taskObject
  }
}
// Objt[0].titulo2.push({id2: 'valor'});