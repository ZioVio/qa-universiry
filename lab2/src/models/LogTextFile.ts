import { Directory } from './Directory';
import { FileSystem } from './FileSystem';
import { FileSystemItem } from './FileSystemItem';

export class LogTextFile extends FileSystemItem {
  constructor(
    name: string,
    private readonly content?: string,
    ctx?: FileSystem,
    parent?: Directory,
  ) {
    super(name, ctx, parent);
  }
  public read(): string | undefined {}
  public append(what: string): void {}
}
