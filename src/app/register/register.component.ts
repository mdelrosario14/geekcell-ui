import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { User } from '../models/user.model';
import { RegisterService } from '../service/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  user : User;
  error : string;
  errorMessage = '';
  errorFromServer = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registerService : RegisterService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log('enter here.');
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.user = <User>this.registerForm.value;
    this.user.roles = ['GCSTANDARD'];
    this.registerService.registerNewUser(this.registerForm.value).subscribe(
      (respUserData) => {
          console.log("updated user = " + respUserData);
          if (null != respUserData['email'] ) {
            this.submitted = false;
            this.router.navigate(['login']);
            this.loading = false;
          } else {
            this.buttonsUpdateOnError(respUserData);
          }          
      },
      (err) => {
        this.buttonsUpdateOnError(err);
      }
    );
  }

  buttonsUpdateOnError(err : any) {
    this.submitted = false;
    this.errorFromServer = true;
    this.errorMessage = err;
    this.loading = false;
  }
}
