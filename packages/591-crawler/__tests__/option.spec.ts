import { assert } from 'chai'
import { Options } from '../lib/option'
import { AreaRange } from '../lib/types'

test('#toParam', function () {
  const option = new Options({ rentPrice: AreaRange.ALL })
  assert.equal(option.toParams(), `rentprice=${AreaRange.ALL}`)
})

test('rawParam', function () {
  const option = new Options({ rentPrice: AreaRange.ALL, rawParams: '&asdf=asdf' })
  assert.equal(option.toParams(), `rentprice=${AreaRange.ALL}&asdf=asdf`)
})
