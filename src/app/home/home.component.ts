import { Component } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';
import { NavService } from '../nav.service';
import { NavSideService } from '../navside.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 constructor(public nav:NavService,public navside: NavSideService ) 
 {
 	 this.navside.hide();
 	 this.nav.show();

 }

 ngOnInit() 
{
  //this.nav.show();
}


}
