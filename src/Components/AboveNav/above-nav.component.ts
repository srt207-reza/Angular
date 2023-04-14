import { Component } from '@angular/core';

@Component({
  selector: 'app-above-nav',
  templateUrl: './above-nav.component.html',
  styleUrls: ['./above-nav.component.css']
})
export class AboveNavComponent {
  courses:Array<string> = ["آموزش ری اکت","آموزش پایتون","آموزش بوت استرپ","آموزش جاوا اسکریپت","CSS آموزش","HTML آموزش"];
  links:Array<string> = ['code','card_giftcard','bug_report','backup']
}
