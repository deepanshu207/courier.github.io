import { Component, OnInit } from '@angular/core';
import { NavService } from '../../nav.service';
import { AuthService } from '../../form/auth.service';
import { Router } from "@angular/router";
import { NavSideService } from '../../navside.service';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit {

constructor(public navside: NavSideService,public nav:NavService,private router: Router, 
    private authService: AuthService )
{
	this.nav.hide();
	this.navside.show();
}

ngOnInit() 
{

}

}
