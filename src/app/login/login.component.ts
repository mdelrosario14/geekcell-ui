import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'mardy';
  password = '';
  invalidLogin = false;

  constructor(private router : Router, private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  checklogin() {
    if (this.authenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['home']);
      this.invalidLogin = false;

      console.log('Login is authenticated.');
    } else {
      this.invalidLogin = true;
    }
  }

}
