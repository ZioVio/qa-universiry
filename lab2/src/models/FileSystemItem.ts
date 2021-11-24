import { Directory } from './Directory';
import { FileSystem } from './FileSystem';

export abstract class FileSystemItem {
  constructor(
    public readonly name: string,
    private ctx?: FileSystem,
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
