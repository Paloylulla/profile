import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { PageOneRoutingModule } from './pahe-one-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { JobExperiencesComponent } from './job-experiences/job-experiences.component';
import { EducationsComponent } from './educations/educations.component';
import { ProgramingSkillsComponent } from './programing-skills/programing-skills.component';
import { FrameworkComponent } from './framework/framework.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [PageOneComponent, JobExperiencesComponent, EducationsComponent, ProgramingSkillsComponent, FrameworkComponent, ToolsComponent],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    MatExpansionModule
  ], exports: [PageOneComponent]
})
export class PageOneModule { }
