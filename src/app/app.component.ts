import { Component ,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService } from './nav.service';
import { NavSideService } from './navside.service';
import { MenubarComponent } from './menubar/menubar.component';
import { SidemenubarComponent } from './form/sidemenubar/sidemenubar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
sidevisible: boolean;
visible: boolean;
/*
 constructor(public nav:NavService,public navside: NavSideService ) 
 {
   
    this.nav.show();
     this.navside.hide();

 }

 ngOnInit() 
{

}
*/


 ngOnInit() 
{
//this.nav.show();
}





}
