import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboveNavComponent } from './above-nav.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AboveNavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[AboveNavComponent]
})
export class AboveNavModule { }
