import { Component, OnInit } from '@angular/core';
import { projects } from '../../../../assets/projects.json';
import {Project} from '../../../models/project';
import { ProjectCategory, ProjectCategoryMapper } from "../../../models/project-category-enum";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: false
})
export class ProjectsComponent implements OnInit {
  public projectsDict: { [key in ProjectCategory]: Project[] } = {
    [ProjectCategory.Bachelor]: [],
    [ProjectCategory.Honours]: [],
    [ProjectCategory.Professional]: []
  };

  constructor() { }

  ngOnInit(): void {
    for (const key in projects) {
      const json = projects[key];
      const project = new Project(json.title, json.description, json.links, json.skills, json.id, ProjectCategoryMapper.toModel(json.category));
      this.projectsDict[project.category].push(project);
    }
  }

}
