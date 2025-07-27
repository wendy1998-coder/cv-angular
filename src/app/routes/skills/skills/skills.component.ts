import { Component, OnInit } from '@angular/core';
import { skills } from '../../../../assets/skills.json';
import { Skill } from "../../../models/skill";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: false
})
export class SkillsComponent implements OnInit {
  public skillsArray: Skill[] = [];

  ngOnInit(): void {
    for (const key in skills) {
      const json = skills[key];
      const skill = new Skill(json.name, json.level, json.origin, json.info, json.type);
      this.skillsArray.push(skill);
    }
  }
}
