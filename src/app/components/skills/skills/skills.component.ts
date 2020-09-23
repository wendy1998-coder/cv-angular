import { Component, OnInit } from '@angular/core';
import { skills } from '../../../../assets/skills.json';
import { Skill } from "../../../models/skill";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
public skillsArray: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:forin
    for (const key in skills) {
      const json = skills[key];
      const skill = new Skill(json.name, json.level, json.origin, json.info, json.type);
      this.skillsArray.push(skill);
    }

    $.getScript("../../../../assets/scripts/javascript/create_skills_datatable.js");
  }

}
