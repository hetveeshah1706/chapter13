import { Router,RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './TaskDemo/task/task.component';
import { AddTaskComponent } from './TaskDemo/add-task/add-task.component';
import { EditTaskComponent } from './TaskDemo/edit-task/edit-task.component';


const arr:Routes=[
{path:'',component:TaskComponent},
{path:'addTask',component:AddTaskComponent},
{path:'editTask/:Id',component:EditTaskComponent}
];
export const routing=RouterModule.forRoot(arr);
