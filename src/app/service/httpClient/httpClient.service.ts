import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  
  constructor(private httpClient:HttpClient) { }

  load() {
    console.log("load()-frontPage call");
    return this.httpClient.get<string>('http://192.168.0.7:8080/frontPage');
  }

  login(username : string, password : string) : Promise<Object> {
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);

    console.log("login()-user login call");  
    return this.httpClient.post('http://192.168.0.7:8080/login', params).toPromise();
  }

}
