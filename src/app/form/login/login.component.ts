import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthService } from '../auth.service';
import { NavService } from '../../nav.service';

import { NavSideService } from '../../navside.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  


  invalidLogin: boolean; 

  constructor
  (
    private router: Router,
   public authService: AuthService,
   public navside: NavSideService,
   public nav:NavService
  ) 
  {
  this.nav.show();
  this.navside.hide();
  }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['../admin']);
        else  
          this.invalidLogin = true; 
      });
  }


}
