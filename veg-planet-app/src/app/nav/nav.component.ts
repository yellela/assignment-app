import { Component, OnInit, Input} from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {

  constructor() { }

  @Input() myName: string;
  @Input() myAddress: string;
  @Input() myAge: string;

}
