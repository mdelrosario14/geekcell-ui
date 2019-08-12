import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  
  homeURL : string = 'http://localhost:8080/web/';
  constructor(private httpClient:HttpClient) { }

  load() {
    console.log("load()-frontPage call");
    return this.httpClient.get<string>(this.homeURL + 'frontPage');
  }

  login(username : string, password : string) : Promise<Object> {
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);

    console.log("login()-user login call");  
    return this.httpClient.post(this.homeURL + 'login', params).toPromise();
  }

  registerUser(user : User) : Promise<Object> {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let options = { headers: headers };
    console.log("registerUser()-register new user=" + user.email);  
    return this.httpClient.post(this.homeURL + 'register', JSON.stringify(user), options).toPromise();
  }


}
