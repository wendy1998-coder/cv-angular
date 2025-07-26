import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../models/project';
import {NavTab} from "../../../models/nav-tab";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  standalone: false
})
export class ProjectItemComponent implements OnInit {
  @Input() project!: Project;

  protected navTabs: NavTab[] = [];

  ngOnInit(): void {
    this.navTabs = [
      new NavTab("Description", "<p>" + this.project.description + "</p>")
    ]
    this.createLinksNavTab();
    this.createSkillsNavTab();
  }

  createLinksNavTab(): void {
    if (this.project.links && this.project.links.length > 0) {
      const linksNavTab = new NavTab("Links and proof", "");
      let content: string = ""
      for (let link of this.project.links) {
        content += "<p>"
        if (link.before) {
          content += link.before
        }
        if (link.src && link.text) {
          content += " <a href='" + link.src + "' target='_blank'>" + link.text + "</a> "
        }
        if (link.after) {
          content += link.after + "<br/>"
        }
        content += "</p>"
      }

      linksNavTab.content = content;
      this.navTabs.push(linksNavTab);
    }
  }

  createSkillsNavTab(): void {
    if (this.project.skills && this.project.skills.length > 0) {
      const skillsNavTab = new NavTab("Skills practiced", "");
      let content: string =
        "<p>From this project, I learned the following skills or practiced them further:</p>" +
        "<ul>"
      for (let skill of this.project.skills) {
        content += "<li>" + skill + "</li>";
      }
      content += "</ul>";
      skillsNavTab.content = content;
      this.navTabs.push(skillsNavTab);
    }
  }
}
