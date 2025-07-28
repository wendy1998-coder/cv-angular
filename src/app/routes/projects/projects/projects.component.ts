import { Component, OnInit } from '@angular/core';
import { projects } from '../../../../assets/projects.json';
import {Project} from '../../../models/project';
import { OriginEnum, OriginMapper } from "../../../models/origin-enum";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: false
})
export class ProjectsComponent implements OnInit {
  public projectsDict: { [key in OriginEnum]: Project[] } = {
    [OriginEnum.Bachelor]: [],
    [OriginEnum.Honours]: [],
    [OriginEnum.Professional]: []
  };

  ngOnInit(): void {
    for (const key in projects) {
      const json = projects[key];
      const project = new Project(json.title, json.description, json.links, json.skills, json.id, OriginMapper.toModel(json.category));
      this.projectsDict[project.category].push(project);
    }
  }

}
