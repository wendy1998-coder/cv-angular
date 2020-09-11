import { Component, OnInit } from '@angular/core';
import { projects } from '../../../../../projects.json';
import {Project} from '../../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projectsArray: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:forin
    for (const key in projects) {
      const json = projects[key];
      this.projectsArray.push(
        new Project(json.title, json.description, json.links, json.skills, json.id, json.category)
      );
    }
  }

}
