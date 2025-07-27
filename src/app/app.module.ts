import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { FooterComponent } from './routes/layout/footer/footer.component';
import { HeaderComponent } from './routes/layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotoDisplayComponent } from './routes/home/photo-display/photo-display.component';
import { ProjectsComponent } from './routes/projects/projects/projects.component';
import { ProjectItemComponent } from './routes/projects/project-item/project-item.component';
import { JobsComponent } from './routes/jobs/jobs.component';
import { SkillsComponent } from './routes/skills/skills/skills.component';
import { SkillsItemComponent } from './routes/skills/skills-item/skills-item.component';
import { HobbiesComponent } from "./routes/hobbies/hobbies.component";
import { SchoolingComponent } from "./routes/schooling/schooling.component";
import { NavTabsComponent } from "./components/nav-tabs/nav-tabs.component";
import { NgbCarousel, NgbSlide } from "@ng-bootstrap/ng-bootstrap";

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
    NavTabsComponent,
    NgbCarousel,
    NgbSlide,
  ],
  providers: [],
  exports: [
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
  bootstrap: [AppComponent]
})
export class AppModule { }
