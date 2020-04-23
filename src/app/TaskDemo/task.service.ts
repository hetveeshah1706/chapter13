import { Injectable } from '@angular/core';
import { Task } from './Task_class';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public url:string="http://localhost:3000/Tasks/";
  constructor(public _http:HttpClient) { }
  getAllTask(){
    return this._http.get<Task[]>(this.url);
  }
  getTaskById(Id:number){
    return this._http.get<Task>(this.url+Id);
  }
  addTask(ObjItem) {
    const body = JSON.stringify(ObjItem);
    const myHeader = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, {headers: myHeader});
  }
  deleteTask(id: number) {
    return this._http.delete(this.url+id);
}
updateTask(ObjItem)
{

  const body = JSON.stringify(ObjItem);
  const myHeader = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.put(this.url + ObjItem.Id, body, {headers: myHeader});
}




}
