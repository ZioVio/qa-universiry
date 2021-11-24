import { Directory } from './Directory';
import { FileSystem } from './FileSystem';
import { FileSystemItem } from './FileSystemItem';

export class BufferFile extends FileSystemItem {
  constructor(
    name: string,
    private readonly content?: string,
    ctx?: FileSystem,
    parent?: Directory,
  ) {
    super(name, ctx, parent);
  }

  public push(what: string): void {}
  public consume(): string | undefined {}
}
