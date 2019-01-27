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

test('#getLocation', async function () {
  const crawler = new Crawler()
  const result = await crawler.list()
  const id = result.data[0].post_id
  const data = await crawler.getLocation(id)

  assert.isNumber(data.latitude)
  assert.isNumber(data.longitude)
  assert.isString(data.address)
})
