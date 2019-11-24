import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpClient/httpClient.service';
import { HelperService } from '../util/helper.service';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  user : User;
  _csrf: string;

  constructor(private httpClientService: HttpClientService, private helperService: HelperService,
    private cookieService: CookieService) { }

  authenticate(username, password) : any {
    const errDefault: String = 'Unable to log user in the Geek Cell server.';
    const userObservable = new Observable(observer => {
      setTimeout(() =>  {
        this.httpClientService.login(username, password).then(
          (ret) => {
            this.user = <User>ret['validUser'];
            if (this.user != null) {
              this._csrf = ret['_csrf'];
              localStorage.setItem('csrf-token', this._csrf);
              localStorage.setItem('JSESSIONID', ret['JSESSIONID']);
              localStorage.setItem('username', username);
              
              
              //console.log('token=' + this._jwt);
              observer.next(this.user);
            } else {
              console.log('user is invalid');
              observer.next(null);
            }
          }).catch((err) => {
              if (err.error != null)  {
                console.log(err.error.errorMsg);
                observer.next(err.error.errorMsg);
              } else {
                console.log(errDefault);
                observer.next(errDefault);
              }
              
            });
      }, 1000);
      
      
      });
      return userObservable;
  }


  isUserLoggedIn() {
    let session = localStorage.getItem('username');
    console.log('local=' + !session === null);

    return !(session === null);
  }
      
 logOut() {
    localStorage.removeItem('csrf-token');
    localStorage.removeItem('username');
  }
}
