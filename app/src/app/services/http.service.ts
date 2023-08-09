import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

type user = {avatar: string, id: number, name: string, username: string};
type task = {completed: boolean, id: number, task: string, user_id: number};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url="http://localhost:4000";
  
  hash = localStorage.getItem("hash") || "";

  constructor( private http:HttpClient ) { }

  getUsers(){

    return this.http.get<user[]>(this.url+`/users`);
    
  }

  getTodos( hash:string ){
    return this.http.get<task[]>(this.url+`/todos`,{ headers : new HttpHeaders({ Authorization: "BASIC " + hash }) });
  }

  addTask(task:task){
    return this.http.post<task>(`${this.url}/todos`,
    task,
    { headers : new HttpHeaders({ Authorization: "BASIC " + this.hash }) }
    );
  }

  complete(id:number){
    return this.http.put(`${this.url}/todos/${id}`,
    null,
    { headers : new HttpHeaders({ Authorization: "BASIC " + this.hash }) }
    );
  }

  delete(id:number){
    return this.http.delete(`${this.url}/todos/${id}`,
    { headers : new HttpHeaders({ Authorization: "BASIC " + this.hash }) }
    );
  }


}
