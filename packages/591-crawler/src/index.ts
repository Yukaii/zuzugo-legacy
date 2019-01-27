import { default as axios, AxiosInstance } from 'axios'
import { Data, TopData } from './types'
import * as querystring from 'querystring'

interface Option {
  page?: number
}

class CrawlerOptions {
  constructor (private options : Option) { }

  toParams () {
    return querystring.stringify({
      firstRow: this.options.page
    })
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
