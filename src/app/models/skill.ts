export class Skill {
  name: string;
  level: string;
  origin: string;
  info: object[];
  type: string;


  constructor(name: string, level: string[], origin: string, info: object[], type: string) {
    this.name = name;
    this.level = this.computeLevel(level);
    this.origin = origin;
    this.info = info;
    this.type = type;
  }

  computeLevel(level: string[]): string {
      // one of the three defined levels
      if (level.length === 1) {
          return level[0];
      }

      // first is intermediate, second is pro -> between intermediate and pro
      if (level[0] === 'intermediate') {
        return 'middle2';
      }

      // first is beginner, second is intermediate -> between beginner and intermediate
      return 'middle1';
  }
}
