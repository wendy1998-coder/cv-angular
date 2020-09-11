export class Project {
  title: string;
  description: string;
  links: object[];
  skills: string[];
  id: string;
  category: string;

  constructor(title: string, description: string, links: object[], skills: string[], id: string, category: string) {
    this.title = title;
    this.description = description;
    this.links = links;
    this.skills = skills;
    this.id = id;
    this.category = category;
  }
}
