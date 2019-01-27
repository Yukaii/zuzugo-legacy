# `591-crawler`

> TODO: description

## Usage

```js
const crawler = require('591-crawler')();

;(async () => {
  const { data } = await crawler.list()
  const { post_id } = data[0]
  const { longitude, latitude } = await crawler.getLocation(post_id)

  console.log(longitude, latitude)
})
```
