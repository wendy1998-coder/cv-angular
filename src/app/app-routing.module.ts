import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProjectsComponent} from './components/projects/projects/projects.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {JobsComponent} from './components/jobs/jobs.component';
import {SchoolingComponent} from './components/schooling/schooling.component';
import {SkillsComponent} from './components/skills/skills/skills.component';
import {LinkedinLoginResponseComponent} from "./components/skills/skill-support/login/linkedin-login-response/linkedin-login-response.component";
import {LoginComponent} from "./components/skills/skill-support/login/login/login.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'school', component: SchoolingComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'linkedInLogin', component: LinkedinLoginResponseComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
