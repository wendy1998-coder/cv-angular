export class NavTab {
  name: string;
  private _content: string;

  constructor(name: string, content: string) {
    this.name = name;
    this._content = content;
  }

  set content(value: string) {
    this._content = value;
  }

  get content(): string {
    return this._content;
  }
}
