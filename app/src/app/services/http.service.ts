import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

type user = {avatar: string, id: number, name: string, username: string};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url="http://localhost:4000"

  constructor( private http:HttpClient ) { }

  getUsers(){

    return this.http.get<user[]>(this.url+`/users`);
    
  }

  getTodos( hash:string ){
    return this.http.get(this.url+`/todos`,{ headers : new HttpHeaders({ Authorization: "BASIC " + hash }) });
  }

}
