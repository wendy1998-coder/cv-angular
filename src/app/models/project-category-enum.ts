export enum ProjectCategory {
  Bachelor = 'bach',
  Honours = 'hon',
  Professional = 'prof',
}

const projectCategoryMap: { [key: string]: ProjectCategory } = {
  [ProjectCategory.Bachelor]: ProjectCategory.Bachelor,
  [ProjectCategory.Honours]: ProjectCategory.Honours,
  [ProjectCategory.Professional]: ProjectCategory.Professional,
}

export class ProjectCategoryMapper {
  public static toModel(dto: string): ProjectCategory {
    return projectCategoryMap[dto];
  }
}
