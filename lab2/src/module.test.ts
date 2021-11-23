import { fn } from './module';

describe('fn', () => {
  it('should return arg value stringified', () => {
    expect(fn(2)).toEqual('2');
  });
});
