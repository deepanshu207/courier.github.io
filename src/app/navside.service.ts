import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


@Injectable()
export class NavSideService {

 sidevisible: boolean;

  constructor() { this.sidevisible = true; }

  hide() { this.sidevisible = false; }

  show() { this.sidevisible = true; }

  toggle() { this.sidevisible = !this.sidevisible; }

  doSomethingElseUseful() { }



}
