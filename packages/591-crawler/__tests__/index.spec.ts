import { assert } from 'chai'
import Crawler from '..'

test('The crawler runs', async () => {
  const crawler = new Crawler()
  const data = await crawler.list()

  assert.isOk(data)
  assert.isArray(data.data)
  assert.isNumber(data.pageNum)
  assert.isNumber(data.total)
})

test('Test pagination', async function () {
  const crawler = new Crawler()
  const result1 = await crawler.list()
  const result2 = await crawler.list({ page: 1 })

  assert.notDeepEqual(result1.data[0], result2.data[1])
})
