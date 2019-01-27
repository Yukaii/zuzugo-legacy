export interface Data {
  addInfo: string
  addition2: number
  addition3: number
  addition4: number
  addr_number_name: string
  address: string
  address_img: string
  address_img_title: string
  alley_name: string
  allfloor: number
  area: number
  balcony_area?: any
  browsenum: number
  browsenum_all: number
  browsenum_name: string
  cartplace: string
  cases_id: number
  cases_name: string
  checkstatus: number
  closed: number
  comment_class: string
  comment_ltime: number
  comment_total: number
  comment_unread: number
  condition: string
  cover: string
  distance: number
  filename: string
  floor: number
  floor2: number
  floorInfo: string
  fulladdress: string
  groundarea?: any
  hasimg: number
  house_img: string
  houseage: number
  houseid: number
  houseimg: string
  housetype: number
  icon_class: string
  icon_name: string
  id: number
  is_combine: number
  isvip: number
  kind: number
  kind_name: string
  kind_name_img: string
  lane_name: string
  layout: string
  layout_str: string
  linkman: string
  living: string
  ltime: string
  mainarea?: any
  mvip: number
  new_img: string
  new_list_comment_total: number
  nick_name: string
  onepxImg: string
  photo_alt: string
  photoNum: number
  post_id: number
  posttime: string
  price: string
  price_hide: string
  refreshtime: number
  region_name: string
  regionid: number
  regionname: string
  room: number
  search_name: string
  section_name: string
  sectionid: number
  sectionname: string
  shape: number
  social_house: number
  space_type_str: string
  status: string
  storeprice: number
  street_name: string
  streetid: number
  type: string
  unit: string
  updatetime: number
  user_id: number
  vipBorder: string
  vipimg: string
  vipstyle: string
}

export interface TopData {
  address: string
  address_2: string
  address_3: string
  alt: string
  area: string
  classLast: string
  detail_url: string
  ico: string
  img_src: string
  is_new_index: 0 | 1
  is_new_list: 0 | 1
  isAd: 0 | 1
  kind_str: string
  onepxImg: string
  photoNum: number
  post_id: number
  price: string
  price_str: string
  price_unit: string
  recom_num: number
  region: number
  regionid: number
  section_str: string
  type: number
}

export enum RentKind {
  All = 0,
  Apart = 1,
  SingleApart = 2,
  ShareApart = 3,
  ShareRoom = 4,
  ParkingLot = 5
}

export enum PriceRange {
  ALL = 0,
  _5K = 1,
  _5K_TO_10K = 2,
  _10K_TO_20K = 3,
  _20K_TO_30K = 4,
  _30K_TO_40K = 5,
  _40K_TO_60K = 6
}

export enum AreaRange {
  ALL = '0,0',
  _10_PIN = '0,10',
  _10_TO_20_PIN = '10,20',
  _20_TO_30_PIN = '20,30',
  _30_TO_40_PIN = '30,40',
  _40_TO_50_PIN = '40,50',
  _50_UP_PIN = '50,'
}

export enum Sex {
  ALL = 0,
  M = 1,
  F = 2,
  Both = 3
}
