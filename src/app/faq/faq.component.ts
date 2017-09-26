import { Component,OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { MenubarComponent } from '../menubar/menubar.component';
import { NavSideService } from '../navside.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

/*
  constructor(public nav: MenubarComponent ) {}

 ngOnInit() 
{

}
*/

 constructor(public navside: NavSideService,public nav:NavService )
{
	this.nav.show();
	this.navside.hide();
}



ngOnInit()
{

}

/*
 constructor(public nav: NavService ) {}
 ngOnInit() 
{
this.nav.hide();
}
*/



/*
visible:boolean;

 constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

*/

}
