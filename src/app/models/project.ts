import { ProjectCategory } from "./project-category-enum";
import { Link } from "./link";

export class Project {
  title: string;
  description: string;
  links: Link[];
  skills: string[];
  id: string;
  category: ProjectCategory;

  constructor(title: string, description: string, links: Link[], skills: string[], id: string, category: ProjectCategory) {
    this.title = title;
    this.description = description;
    this.links = links;
    this.skills = skills;
    this.id = id;
    this.category = category;
  }
}
