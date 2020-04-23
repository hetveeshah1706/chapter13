import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Task_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  arr=["done","pending"]
  constructor(public _TaskDataser:TaskService,public _route:Router) { }

  ngOnInit(): void { }
  onTaskAdd(f){
    this._TaskDataser.addTask(f.value).subscribe(
      (data:Task)=>{
        alert("Data Added Successfully!!")
        this._route.navigate(['/'])
      }
    );
  }

}
