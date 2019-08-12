import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'geekcell-ui';

  constructor (private authenticationService : AuthenticationService, private router: Router) {
    this.load();
  }

  public load(): void {
      this.router.navigate(['front']);
   }
}
