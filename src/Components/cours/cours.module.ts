import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursComponent } from './cours.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    CoursComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[CoursComponent]
})
export class CoursModule { }
