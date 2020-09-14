import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProjectsComponent} from './components/projects/projects/projects.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {JobsComponent} from './components/jobs/jobs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'jobs', component: JobsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
