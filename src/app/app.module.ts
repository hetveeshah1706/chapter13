import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TaskComponent } from './TaskDemo/task/task.component';
import { AddTaskComponent } from './TaskDemo/add-task/add-task.component';
import { EditTaskComponent } from './TaskDemo/edit-task/edit-task.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
