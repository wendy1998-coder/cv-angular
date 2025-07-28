export enum SkillType {
  HARD = 'hard',
  SOFT = 'soft'
}

const skillTypeMap: { [key: string]: SkillType } = {
  [SkillType.HARD]: SkillType.HARD,
  [SkillType.SOFT]: SkillType.SOFT
}

export class SkillTypeMapper {
  public static toModel(dto: string): SkillType {
    return skillTypeMap[dto];
  }
}
