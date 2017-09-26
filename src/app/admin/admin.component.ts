import { Component,OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { AuthService } from '../form/auth.service';
import { Router } from "@angular/router";
import { NavSideService } from '../navside.service';
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 /*
ngOnInit() 
{
  
$('#sidebarCollapse').on('click', function () {
                     $('#sidebar, #content').toggleClass('active');
                     $('.collapse.in').toggleClass('in');
                     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                 });
 
}
*/

constructor(public navside: NavSideService,public nav:NavService,private router: Router, 
    private authService: AuthService )
{
	this.nav.hide();
	this.navside.show();
}

ngOnInit() 
{
//this.nav.hide();
}

}
