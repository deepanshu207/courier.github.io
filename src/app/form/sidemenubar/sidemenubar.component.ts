import { Component, OnInit } from '@angular/core';
declare var $: any;
import { NavSideService } from '../../navside.service';

@Component({
  selector: 'app-sidemenubar',
  templateUrl: './sidemenubar.component.html',
  styleUrls: ['./sidemenubar.component.css']
})
export class SidemenubarComponent implements OnInit {


/*
  constructor() { }

  ngOnInit() {
  	 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar, #content').toggleClass('active');
                     $('.collapse.in').toggleClass('in');
                     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                 });
 
 }
  */

 constructor(public navside:NavSideService ) 
 {
 	this.navside.show();
 }


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

ngOnInit() 
{

	 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar, #content').toggleClass('active');
                     $('.collapse.in').toggleClass('in');
                     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                 });
	 

}





}
