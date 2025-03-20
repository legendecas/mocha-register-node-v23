import { foo } from './mymod';
import assert from 'node:assert';

console.log('Testing with Node.js %s', process.versions.node);

// Add a TypeScript only syntax to ensure this file is treated as a TypeScript file.
type Test = string;

describe('foo', () => {
  it('should import value', () => {
    assert.strictEqual(foo as Test, 'bar');
  });
});
