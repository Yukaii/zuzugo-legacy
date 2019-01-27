import { default as axios, AxiosInstance } from 'axios'
import { Data, TopData } from './types'
import * as querystring from 'querystring'

enum RentKind {
  All = 0,
  Apart = 1,
  SingleApart = 2,
  ShareApart = 3,
  ShareRoom = 4,
  ParkingLot = 5
}

enum PriceRange {
  ALL = 0,
  _5K = 1,
  _5K_TO_10K = 2,
  _10K_TO_20K = 3,
  _20K_TO_30K = 4,
  _30K_TO_40K = 5,
  _40K_TO_60K = 6
}

enum AreaRange {
  ALL = '0,0',
  _10_PIN = '0,10',
  _10_TO_20_PIN = '10,20',
  _20_TO_30_PIN = '20,30',
  _30_TO_40_PIN = '30,40',
  _40_TO_50_PIN = '40,50',
  _50_UP_PIN = '50,'
}

enum Sex {
  ALL = 0,
  M = 1,
  F = 2,
  Both = 3
}

interface Option {
  page?: number
  kind?: RentKind,
  rentPrice?: PriceRange | string,
  area?: AreaRange | string
  sex?: Sex,
  rawParams?: string
}

const fieldsMap : { [k in keyof Option]: string } = {
  area: 'area',
  kind: 'kind',
  page: 'firstRow',
  rentPrice: 'rentprice',
  sex: 'sex'
}

class CrawlerOptions {
  constructor (private options : Option) { }

  toParams () {
    const mappedOption = Object.keys(this.options)
      .reduce((acc, key) => ({ ...acc, [fieldsMap[key]]: this.options[key] }), {})
    return querystring.stringify(mappedOption) + (this.options.rawParams || '')
  }
}

type ListResult = {
  total: number
  pageNum: number
  data: Array<Data>
}

interface ListResponse {
  status: number,
  data: {
    topData: Array<TopData>,
    data: Array<Data>
  },
  records: string,
  is_recom: number
}

export default class Crawler {
  private client: AxiosInstance;

  constructor () {
    this.client = axios.create({
      withCredentials: true,
      baseURL: 'https://rent.591.com.tw'
    })
  }

  async list (opt: Option = {}): Promise<ListResult> {
    const options = new CrawlerOptions(opt)
    const { data } = await this.client.get(`/home/search/rsList?${options.toParams()}`)
    let listData: ListResponse = data

    const total = parseInt(listData.records)

    return {
      total,
      pageNum: total / 30,
      data: listData.data.data
    }
  }
}
