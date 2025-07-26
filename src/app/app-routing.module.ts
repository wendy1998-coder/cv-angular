import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ProjectsComponent } from './routes/projects/projects/projects.component';
import { JobsComponent } from './routes/jobs/jobs.component';
import { SkillsComponent } from './routes/skills/skills/skills.component';
import { HobbiesComponent } from "./routes/hobbies/hobbies.component";
import { SchoolingComponent } from "./routes/schooling/schooling.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:
      'projects',
    component: ProjectsComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'school',
    component: SchoolingComponent
  },
  {
    path: 'skills', component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
