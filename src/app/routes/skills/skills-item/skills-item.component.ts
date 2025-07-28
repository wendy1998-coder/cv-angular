import { Component, Input } from '@angular/core';
import { Skill } from '../../../models/skill/skill';
import { SkillLevel } from "../../../models/skill/skill-level";
import { OriginEnum } from "../../../models/origin-enum";
import { SkillType } from "../../../models/skill/skill-type";

@Component({
  selector: 'tr[skills-item]',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css'],
  standalone: false
})
export class SkillsItemComponent {
  @Input() skill!: Skill;

  protected readonly SkillLevel = SkillLevel;
  protected readonly OriginEnum = OriginEnum;
  protected readonly SkillType = SkillType;
}
