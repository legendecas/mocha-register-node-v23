This is a simple example of how mocha and Node.js "registers" (depends on `require.extension`)
does not work well with Node.js v23, `--experimental-strip-types` enabled by default.

```bash
# Test with babel register
$ npm run test-babel

# Test with ts-node
$ npm run test-ts-node
```

TypeScript `tsc` with compiler options `module` and `moduleResolution` set to [`node16`][] (or any other `node*`)
will produce CommonJS format if the `package.json#type` is not set or set to `commonjs`, for `.ts` files.

[`node16`]: https://www.typescriptlang.org/tsconfig/#node16node18nodenext
