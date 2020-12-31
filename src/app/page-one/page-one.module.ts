import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { PageOneRoutingModule } from './pahe-one-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [PageOneComponent],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    MatExpansionModule
  ], exports: [PageOneComponent]
})
export class PageOneModule { }
