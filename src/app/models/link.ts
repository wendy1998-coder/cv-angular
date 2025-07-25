export class Link {
  readonly before?: string | undefined
  readonly src?: string | undefined
  readonly text?: string | undefined
  readonly after?: string | undefined


  constructor(before?: string | undefined,
              src?: string | undefined,
              text?: string | undefined,
              after?: string | undefined
  ) {
    this.before = before;
    this.src = src;
    this.text = text;
    this.after = after;
  }
}
