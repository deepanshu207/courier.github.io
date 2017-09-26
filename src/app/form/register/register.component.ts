import { Component } from '@angular/core';
import { NavService } from '../../nav.service';

import { NavSideService } from '../../navside.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

 constructor(public navside: NavSideService,public nav:NavService )
{
	this.nav.show();
	this.navside.hide();
}





}
