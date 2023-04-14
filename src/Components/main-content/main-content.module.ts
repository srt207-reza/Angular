import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { CoursModule } from '../cours/cours.module';


@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    CoursModule
  ],
  exports:[MainContentComponent]
})
export class MainContentModule { }
