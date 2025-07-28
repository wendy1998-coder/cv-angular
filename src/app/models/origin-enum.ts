export enum OriginEnum {
  Bachelor = 'bach',
  Honours = 'hon',
  Professional = 'prof',
}

const originMap: { [key: string]: OriginEnum } = {
  [OriginEnum.Bachelor]: OriginEnum.Bachelor,
  [OriginEnum.Honours]: OriginEnum.Honours,
  [OriginEnum.Professional]: OriginEnum.Professional,
}

export class OriginMapper {
  public static toModel(dto: string): OriginEnum {
    return originMap[dto];
  }
}
