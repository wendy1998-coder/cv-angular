import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotoDisplayComponent } from './components/home/photo-display/photo-display.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SchoolingComponent } from './components/schooling/schooling.component';
import { SkillsComponent } from './components/skills/skills/skills.component';
import { SkillsItemComponent } from './components/skills/skills-item/skills-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PhotoDisplayComponent,
    ProjectsComponent,
    ProjectItemComponent,
    HobbiesComponent,
    JobsComponent,
    SchoolingComponent,
    SkillsComponent,
    SkillsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
