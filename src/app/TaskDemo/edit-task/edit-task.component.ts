import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../Task_class';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  Id:number=0;
  Title:string="";
  Status:string="";
  constructor(public _actroutes:ActivatedRoute,public _TaskData:TaskService,public _routes:Router) { }

  arr=["done","pending"]
  ngOnInit(): void {
    this.Id=this._actroutes.snapshot.params['Id'];
    this._TaskData.getTaskById(this.Id).subscribe(
      (data:Task)=>{

        this.Title=data[0].Title;
        this.Status=data[0].Status;

      }
    );
  }
  onTaskUpdate(f){
    this._TaskData.updateTask(f.value).subscribe(
      (data:Task)=>{

        alert("Data Updated!!");
        this._routes.navigate(['/'])
      }
    );
  }

}
