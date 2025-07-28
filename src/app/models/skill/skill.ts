import { Link } from "../link";
import { OriginEnum, OriginMapper } from "../origin-enum";
import { SkillLevel, SkillLevelMapper } from "./skill-level";
import { SkillType, SkillTypeMapper } from "./skill-type";

export class Skill {
  name: string;
  level: SkillLevel;
  origin: OriginEnum;
  info: Link[];
  type: SkillType;


  constructor(name: string, level: string[], origin: string, info: Link[], type: string) {
    this.name = name;
    this.level = this.computeLevel(level);
    this.origin = OriginMapper.toModel(origin);
    this.info = info;
    this.type = SkillTypeMapper.toModel(type);
  }

  computeLevel(level: string[]): SkillLevel {
      // one of the three defined levels
      if (level.length === 1) {
          return SkillLevelMapper.toModel(level[0]);
      }

      // first is intermediate, second is advanced -> between intermediate and pro
      if (level[0] === 'intermediate') {
        return SkillLevel.INTERMEDIATE_ADVANCED;
      }

      // first is beginner, second is intermediate -> between beginner and intermediate
      return SkillLevel.BEGINNER_INTERMEDIATE;
  }
}
