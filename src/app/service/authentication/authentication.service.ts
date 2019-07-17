import { Injectable } from '@angular/core';
import { HttpClientService, User } from '../httpClient/httpClient.service';
import { HelperService } from '../util/helper.service';

@Injectable({
  providedIn: 'root'
})



export class AuthenticationService {

  user : User;

  constructor(private httpClientService: HttpClientService, private helperService: HelperService) { }

  authenticate(username, password) {
    
    this.httpClientService.login(username, password).subscribe(
      (ret) => {
         this.user = <User>ret['validUser'];
      } ,
      (err) => console.log(err.error.errorMsg)
    );
    if (this.user != null) {
      sessionStorage.setItem('username', username);
      console.log('user=' + this.user.email);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');

    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
