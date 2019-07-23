import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  pwd = '';
  invalidLogin = false;
  errorMessage = '';
  user : User;

  constructor(private authenticationService : AuthenticationService, private router : Router) { }

  ngOnInit() {
  }

  checklogin() {

    if(this.email.trim.length == 0 || this.pwd.length == 0) {
      this.invalidLogin = true;
      this.errorMessage = 'Please enter your credentials.';
      return;
    }

    const userObservable = this.authenticationService.authenticate(this.email, this.pwd);
    userObservable.subscribe((userRespData : any) => {
      this.user = userRespData;
      if (this.user != null && this.user.userId > 0) {
        this.router.navigate(['home']);
        this.invalidLogin = false;
  
        console.log('Login is authenticated.');
      } else {
        this.invalidLogin = true;
        this.errorMessage = userRespData;
      }
    });
 
  }

}
