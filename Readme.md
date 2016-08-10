
# reoccur

  tiny zero-dependency promise loop.



## Example

```js
let loop = require('reoccur')
let i = 100

loop(function (recur, resolve, reject) {
  if (i > 100) i-- && recur()
  else resolve(i)
}).then(v => {
  assert.equal(v, 0)
})
```

## Why?

With this package, you can emulate things like:

```js
async function () {
  while (i > 100) {
    await wait('1s')
    i--
  }
  return i
}
```

without having the engine support.

## Install

```js
npm install reoccur
```

## License

MIT
