import { Component, OnInit } from '@angular/core';
import { skills } from '../../../../assets/skills.json';
import { Skill } from "../../../models/skill/skill";
import { SkillLevel } from "../../../models/skill/skill-level";
import { OriginEnum } from "../../../models/origin-enum";
import { SkillType } from "../../../models/skill/skill-type";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: false
})
export class SkillsComponent implements OnInit {
  private skillsArray: Skill[] = [];
  protected visibleSkillsArray: Skill[] = [];
  protected levelFilters: SkillLevel[] = []
  protected originFilters: OriginEnum[] = []
  protected typeFilters: SkillType[] = []

  protected readonly OriginEnum = OriginEnum;
  protected readonly SkillLevel = SkillLevel;
  protected readonly SkillType = SkillType;

  ngOnInit(): void {
    for (const key in skills) {
      const json = skills[key];
      const skill = new Skill(json.name, json.level, json.origin, json.info, json.type);
      this.skillsArray.push(skill);
    }
    this.visibleSkillsArray = this.skillsArray;
  }

  protected toggleLevelFilter(filter: SkillLevel): void {
    if (this.levelFilters.includes(filter)) {
      this.levelFilters = this.levelFilters.filter(level => level !== filter);
    } else {
      this.levelFilters.push(filter);
    }
    this.determineVisibleSkills()
  }

  protected toggleOriginFilter(filter: OriginEnum): void {
    if (this.originFilters.includes(filter)) {
      this.originFilters = this.originFilters.filter(origin => origin !== filter);
    } else {
      this.originFilters.push(filter);
    }
    this.determineVisibleSkills()
  }

  protected toggleTypeFilter(filter: SkillType): void {
    if (this.typeFilters.includes(filter)) {
      this.typeFilters = this.typeFilters.filter(type => type !== filter);
    }  else {
      this.typeFilters.push(filter);
    }
    this.determineVisibleSkills()
  }

  protected determineVisibleSkills(): void {
    this.visibleSkillsArray =
      this.skillsArray.filter(skill => {
        if (this.levelFilters.length > 0 && !this.levelFilters.includes(skill.level)) {
          return false;
        }
        if (this.originFilters.length > 0 && !this.originFilters.includes(skill.origin)) {
          return false;
        }
        if (this.typeFilters.length > 0 && !this.typeFilters.includes(skill.type)) {
          return false;
        }

        return true
      })
  }
}
