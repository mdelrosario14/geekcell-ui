import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front/front.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientService } from './service/httpClient/httpClient.service';
import { HttpClient, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; 
import { HelperService } from './service/util/helper.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './service/register/register.service';
import { WorksheetService } from './service/worksheet/worksheet.service';
import { SpringbootInterceptor } from './service/SpringbootInterceptor';
import { CookieService } from 'ngx-cookie-service';
import { SummaryComponent } from './summary/summary.component';
import { MonthTabComponent } from './month-tab/month-tab.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    FrontComponent,
    HomeComponent,
    RegisterComponent,
    SummaryComponent,
    MonthTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [HttpClientService, HttpClient, HelperService, RegisterService, WorksheetService, CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpringbootInterceptor,
      multi: true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
