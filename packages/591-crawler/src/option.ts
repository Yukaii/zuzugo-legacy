import * as querystring from 'querystring'
import { AreaRange, PriceRange, Sex, RentKind } from './types'

export interface IOption {
  page?: number
  kind?: RentKind,
  rentPrice?: PriceRange | string,
  area?: AreaRange | string
  sex?: Sex,
  rawParams?: string
}

const fieldsMap : { [k in keyof IOption]: string } = {
  area: 'area',
  kind: 'kind',
  page: 'firstRow',
  rentPrice: 'rentprice',
  sex: 'sex'
}

export class Options {
  constructor (private options : IOption) { }

  toParams () {
    const mappedOption = Object.keys(this.options)
      .reduce((acc, key) => {
        if (typeof fieldsMap[key] !== 'undefined') {
          return { ...acc, [fieldsMap[key]]: this.options[key] }
        } else {
          return acc
        }
      }, {})
    return querystring.stringify(mappedOption, undefined, undefined, { encodeURIComponent: encodeURI }) + (this.options.rawParams || '')
  }
}
