import { Directory } from './Directory';
import { FileSystem } from './FileSystem';
import { FileSystemItem } from './FileSystemItem';

export class BinaryFile extends FileSystemItem {
  constructor(
    name: string,
    private readonly content?: ArrayBuffer,
    ctx?: FileSystem,
    parent?: Directory,
  ) {
    super(name, ctx, parent);
  }

  public read(): ArrayBuffer | undefined {
    return this.content;
  }
}
