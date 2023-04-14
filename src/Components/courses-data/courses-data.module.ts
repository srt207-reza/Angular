import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesDataComponent } from './courses-data.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CoursesDataComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[CoursesDataComponent]
})
export class CoursesDataModule { }
