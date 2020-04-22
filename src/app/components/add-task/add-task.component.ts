import { Component, OnInit, Output, EventEmitter} from '@angular/core';

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

  // public result:any = {};

  // public getTask() {
  //   this.sendTask.emit(this.result);
  // }

  







  constructor() { }


  ngOnInit(): void {
  }



  // getTask(event): void{
  //   this.task = event.target.value;
  //   this.sendTask.emit(this.task);
  // }
}
