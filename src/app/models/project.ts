import { OriginEnum } from "./origin-enum";
import { Link } from "./link";

export class Project {
  title: string;
  description: string;
  links: Link[] | undefined;
  skills: string[];
  id: string;
  category: OriginEnum;

  constructor(title: string, description: string, links: Link[] | undefined, skills: string[], id: string, category: OriginEnum) {
    this.title = title;
    this.description = description;
    this.links = links;
    this.skills = skills;
    this.id = id;
    this.category = category;
  }
}
