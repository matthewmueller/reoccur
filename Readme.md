
# reoccur

  tiny zero-dependency promise loop

## Example

```js
let loop = require('reoccur')
let i = 0

loop(function (recur, resolve, reject) {
  if (i > 100) i-- && recur()
  else resolve(i)
}).then(v => {
  assert.equal(v, 0)
})
```

## Install

```js
npm install reoccur
```

## License

MIT
