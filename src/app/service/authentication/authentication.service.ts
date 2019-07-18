import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpClient/httpClient.service';
import { HelperService } from '../util/helper.service';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  user : User;

  constructor(private httpClientService: HttpClientService, private helperService: HelperService) { }

  authenticate(username, password) : any {
    const userObservable = new Observable(observer => {
      setTimeout(() => {
        this.httpClientService.login(username, password).then(
          (ret) => {
            this.user = <User>ret['validUser'];
            if (this.user != null) {
              sessionStorage.setItem('username', username);
              console.log('user=' + this.user.email);
              observer.next(this.user);
            } else {
              console.log('user is invalid');
              observer.next(null);
            }
          }).catch((err) => console.log(err.error.errorMsg));
      }, 1000);
      
      });
      return userObservable;
  }
      
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');

    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
