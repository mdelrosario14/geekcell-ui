import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpClient/httpClient.service';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClientService: HttpClientService) { }

  registerNewUser(user : User) : any {
    const errDefault : string = "Unable to register new user.";
    const regObservable = new Observable(observer => {
      setTimeout(() => {
        this.httpClientService.registerUser(user).then(
          (ret) => {
               user = <User>ret;
               console.log("return=" + user);
            
          }).catch((err) => {
            if (err.error != null)  {
              console.log(err.error.errorMsg);
              observer.next(err.error.errorMsg);
            } else {
              console.log(errDefault);
              observer.next(errDefault);
            }
          })
        }, 1000)
      });
      return regObservable;
    }
    
}
