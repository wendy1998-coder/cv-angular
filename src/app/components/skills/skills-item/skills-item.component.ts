import {Component, Input} from '@angular/core';
import {Skill} from '../../../models/skill';

@Component({
  selector: 'tr[skills-item]',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent {
  @Input() skill: Skill;

  constructor() { }

}
