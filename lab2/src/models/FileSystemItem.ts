import { Directory } from './Directory';
import { FileSystem } from './FileSystem';

export abstract class FileSystemItem {
  constructor(
    private ctx: FileSystem,
    public readonly name: string,
    public parent?: Directory,
  ) {}

  // this can stop being abstract and we can just implement it here
  public delete(): void {
    // ...
  }
  public move(to: Directory): void {
    // ...
  }
}
