import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front/front.component';
import { FormsModule } from '@angular/forms';
import { HttpClientService } from './service/httpClient/httpClient.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
