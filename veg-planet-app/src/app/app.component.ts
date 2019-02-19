import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veg-planet-app';

  myDetails:any= [
    {Name:'phani',Address:"Banglore",age:"25"},
    {Name:'phani',Address:"Banglore",age:"25"},
    {Name:'phani',Address:"Banglore",age:"25"}
  ]

  public show:boolean = false;
  public buttonName:any = 'Show';

  toggle() {
    this.show = !this.show;
  }

  public navshow:boolean = false;
  public navName:any = 'Show';

  navtoggle() {
    this.navshow = !this.navshow;
  }

  navEle=[
    "FirstItem",
    "FirstItem",
    "FirstItem",
    "FirstItem",
    "FirstItem",
    "FirstItem",
    "FirstItem",
    "FirstItem",
  ]



}
