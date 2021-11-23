import { FileSystem } from './FileSystem';
import { FileSystemItem } from './FileSystemItem';

export class Directory extends FileSystemItem {
  public items: FileSystemItem[];

  constructor(ctx: FileSystem, name: string, items: FileSystemItem[] = []) {
    super(ctx, name);
    this.items = items;
  }

  public moveItem(what: FileSystemItem, to: Directory): void {
    throw new Error('Method not implemented.');
  }
}
