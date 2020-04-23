import { Component, OnInit } from '@angular/core';

import { Task } from '../Task_class';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
allTasks:Task[]=[];
constructor(private _taskdata:TaskService,private _route:Router) { }
ngOnInit() {
  this._taskdata.getAllTask().subscribe(
    (data:Task[])=>{
      this.allTasks=data;
    }
  );
}
onAdd(){
  this._route.navigate(['/addTask']);
}
onDelete(item)
{

  this._taskdata.deleteTask(item.Id).subscribe(
    (data)=>{
      this.allTasks.splice(this.allTasks.indexOf(item),1);
    }
  );
}
onUpdate(item){
  this._route.navigate(['/editTask',item.Id])
}




}
