import { Component,OnInit } from '@angular/core';
declare var $: any;
import { NavService } from '../nav.service';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})



@Injectable()
export class MenubarComponent implements OnInit {



 constructor(public nav:NavService ) 
 {
   this.nav.show();
 }

 ngOnInit() 
{
  //this.nav.show();
}

/*
visible:boolean;

 constructor() { this.visible = true; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

ngOnInit() 
{
this.show();
}
*/


/*
visible: boolean;

  constructor() { this.visible = true; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }
*/  



}
