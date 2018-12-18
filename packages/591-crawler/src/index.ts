import { default as axios, AxiosInstance } from 'axios'

export default class Crawler {
  private client: AxiosInstance;

  constructor () {
    this.client = axios.create({
      withCredentials: true,
      baseURL: 'https://rent.591.com.tw'
    })
  }

  async list () {
    const { data } = await this.client.get('/home/search/rsList')
    return data
  }
}
