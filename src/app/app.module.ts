import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './form/register/register.component';
import { LoginComponent } from './form/login/login.component';

import { FormsModule } from '@angular/forms';


import { HttpModule } from '@angular/http';
//import { AdminComponent } from './form/admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { AdminComponent } from './admin/admin.component';
import { NavService } from './nav.service';

import { NavSideService } from './navside.service';

import { AuthService } from './form/auth.service';

import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './form/fake-backend';
import { Http, BaseRequestOptions } from '@angular/http';
import { AuthGuard } from './form/auth-guard.service';
import { SidemenubarComponent } from './form/sidemenubar/sidemenubar.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
   
    ContactUsComponent,
    FaqComponent,
    SidemenubarComponent,
    AdminAboutComponent
    ,NavService,NavSideService
  ],
  imports: [
    BrowserModule,routing,RouterModule,FormsModule,HttpModule
  ],
  providers: [AuthService,AuthGuard,NavService,NavSideService,MenubarComponent,
 fakeBackendProvider,SidemenubarComponent,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
