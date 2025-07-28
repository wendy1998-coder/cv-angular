export enum SkillLevel {
  BEGINNER = 'beginner',
  BEGINNER_INTERMEDIATE = 'middle1',
  INTERMEDIATE = 'intermediate',
  INTERMEDIATE_ADVANCED = 'middle2',
  ADVANCED = 'advanced'
}

const skillLevelMap: { [key: string]: SkillLevel } = {
  [SkillLevel.BEGINNER]: SkillLevel.BEGINNER,
  [SkillLevel.BEGINNER_INTERMEDIATE]: SkillLevel.BEGINNER_INTERMEDIATE,
  [SkillLevel.INTERMEDIATE]: SkillLevel.INTERMEDIATE,
  [SkillLevel.INTERMEDIATE_ADVANCED]: SkillLevel.INTERMEDIATE_ADVANCED,
  [SkillLevel.ADVANCED]: SkillLevel.ADVANCED
}

export class SkillLevelMapper {
  public static toModel(dto: string): SkillLevel {
    return skillLevelMap[dto];
  }
}
