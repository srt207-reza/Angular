import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navItem:Array<string> = ['فرانت اند','امنیت','مقالات','پایتون','مهارت های نرم','فروشگاه']
}
