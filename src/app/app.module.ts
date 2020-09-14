import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PhotoDisplayComponent } from './components/home/photo-display/photo-display.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SchoolingComponent } from './components/schooling/schooling.component';

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
    SchoolingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
