import { createClient }  from '@google/maps'
import * as path from 'path'
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const client = createClient({ key: process.env.GOOGLE_MAP_API_KEY, Promise: Promise })

export default class ZenchiZennou {
  static async run () {
    const p = client.directions({
      origin: { lat: 25.052999, lng: 121.529226 },
      destination: { lat: 25.0456995, lng: 121.5733506 }
    })
    const response = await p.asPromise()

    console.log(response)
  }
}
