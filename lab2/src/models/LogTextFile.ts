import { Directory } from './Directory';
import { FileSystem } from './FileSystem';
import { FileSystemItem } from './FileSystemItem';

export class LogTextFile extends FileSystemItem {
  constructor(
    name: string,
    private content?: string,
    ctx?: FileSystem,
    parent?: Directory,
  ) {
    super(name, ctx, parent);
  }
  public read(): string | undefined {
    return this.content;
  }
  public append(what: string): void {
    this.content ||= '';
    this.content += what;
  }
}
