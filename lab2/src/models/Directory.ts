import { FileSystem } from './FileSystem';
import { FileSystemItem } from './FileSystemItem';

export class Directory extends FileSystemItem {
  public items: FileSystemItem[];

  constructor(name: string, items: FileSystemItem[] = [], ctx?: FileSystem) {
    super(name, ctx);
    this.items = items;
  }

  public moveItem(what: FileSystemItem, to: Directory): void {
    throw new Error('Method not implemented.');
  }
}
