import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AboveNavModule } from '../AboveNav/above-nav.module';
import { NavbarModule } from '../Navbar/navbar.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AboveNavModule,
    NavbarModule,
    MatIconModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
