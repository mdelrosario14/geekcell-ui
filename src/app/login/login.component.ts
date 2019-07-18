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

  username = 'mardy';
  password = '';
  invalidLogin = false;
  user : User;

  constructor(private authenticationService : AuthenticationService, private router : Router) { }

  ngOnInit() {
  }

  checklogin() {
    const userObservable = this.authenticationService.authenticate(this.username, this.password);
    userObservable.subscribe((userRespData : User) => {
      this.user = userRespData;
      if (this.user != null) {
        this.router.navigate(['home']);
        this.invalidLogin = false;
  
        console.log('Login is authenticated.');
      } else {
        this.invalidLogin = true;
      }
    });
 


    
  }

}
