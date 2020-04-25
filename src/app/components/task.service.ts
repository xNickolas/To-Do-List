import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "";
  private taskObject = [];
  private taskObjectFinal;
  private id: number = 1;
  tasks: Task[] = [];


  private apiUrlPost = 'https://ceep.herokuapp.com/cartoes/salvar'
  
    apiUrlGet = 'https://ceep.herokuapp.com/cartoes/carregar?'
  
    usuario = "pedro@email.com.br"

  constructor(private http: HttpClient) { }

  create(task: Task) {
    console.log("entrou no create task");
    task.id = this.id++;
    this.taskObject.push(task);
    console.log(this.taskObject);
    // this.taskObjectFinal = Object.assign({}, this.taskObject);
    // console.log("final object", this.taskObjectFinal);
  } 

  delete(id){
    this.taskObject = this.taskObject.filter (task => 
      task.id !== id )    // return this.taskObject

    return this.taskObject;
    // this.taskObject.splice(index,1);
  }

  getData(){
    return this.http.get(this.apiUrlPost);
    console.log(this.apiUrlPost)
  }

  read() {
    return this.taskObject;
  }




  getAlltasks(): Task[] {
    return this.tasks;
  }

  postAlltasks(){
    // this.http.post(this.apiUrlPost,this.mural)
  }

}
