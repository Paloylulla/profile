import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { PageOneRoutingModule } from './pahe-one-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { JobExperiencesComponent } from './job-experiences/job-experiences.component';
import { EducationsComponent } from './educations/educations.component';
import { ProgramingSkillsComponent } from './programing-skills/programing-skills.component';

@NgModule({
  declarations: [PageOneComponent, JobExperiencesComponent, EducationsComponent, ProgramingSkillsComponent],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    MatExpansionModule
  ], exports: [PageOneComponent]
})
export class PageOneModule { }
