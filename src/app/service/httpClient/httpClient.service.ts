import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export class User {
  constructor(
    public userId : number,
    public email : string,
    public firstName : string,
    public lastName : string,
    public roles : string[],
    public pwd : string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  
  constructor(private httpClient:HttpClient) { }

  load() {
    console.log("load()-frontPage call");
    return this.httpClient.get<string>('http://localhost:8080/frontPage');
  }

  login(username : string, password : string) : Observable<Object> {
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);

    console.log("login()-user login call");  
    return this.httpClient.post('http://localhost:8080/login', params);
  }

}
