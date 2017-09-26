import { Component ,OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { MenubarComponent } from '../menubar/menubar.component';
import { NavSideService } from '../navside.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 constructor(public navside: NavSideService,public nav:NavService )
{
	this.nav.show();
	this.navside.hide();
}



ngOnInit()
{

}
/*
ngOnInit()
{
	this.nav.show();
}

constructor(public nav: NavService )
{
	this.nav.hide();
}
*/

/*
 ngOnInit() 
{
  this.nav.hide();
}
*/

}
