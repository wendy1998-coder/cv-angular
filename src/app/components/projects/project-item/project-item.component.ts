import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../models/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  standalone: false
})
export class ProjectItemComponent {
  @Input() project!: Project;
}
