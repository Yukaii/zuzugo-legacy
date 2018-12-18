import Crawler from '..'

test('The crawler runs', async () => {
  const crawler = new Crawler()
  const data = await crawler.list()
  expect(data).toBeTruthy()
})
