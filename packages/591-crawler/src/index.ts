import { default as axios, AxiosInstance } from 'axios'
import * as querystring from 'querystring'
import * as cheerio from 'cheerio'

import { Data, TopData } from './types'
import { Options, IOption } from './option'

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

interface ILocation {
  latitude: number,
  longitude: number,
  address?: string
}

export default class Crawler {
  private client: AxiosInstance;

  constructor () {
    this.client = axios.create({
      withCredentials: true,
      baseURL: 'https://rent.591.com.tw'
    })
  }

  async list (opt: IOption = {}): Promise<ListResult> {
    const options = new Options(opt)
    const { data } = await this.client.get(`/home/search/rsList?${options.toParams()}`)
    let listData: ListResponse = data

    const total = parseInt(listData.records)

    return {
      total,
      pageNum: total / 30,
      data: listData.data.data
    }
  }

  async getLocation (id: number): Promise<ILocation> {
    const param = {
      type: 1,
      s: 'j_edit_maps',
      version: 1,
      post_id: id
    }
    const { data } = await this.client.get(`/map-houseRound.html?${querystring.stringify(param)}`)
    const $ = cheerio.load(data)

    const latitude = parseFloat($('input[type="hidden"][id="lat"]').attr('value'))
    const longitude = parseFloat($('input[type="hidden"][id="lng"]').attr('value'))
    const address = $('input[type="hidden"][id="collect_name"]').attr('value')
    return {
      latitude,
      longitude,
      address
    }
  }
}
