import { IconType } from 'react-icons/lib'

export interface IRoute {
  route: string
  name: string
  component: IconType
  pageName: string
}

//News
export interface INews {
  status: string
  totalResults: number
  articles: IArticle[]
}

export interface IArticle {
  author?: string
  content?: string
  description: string
  source: ISource
  title: string
  url: string
  urlToImage: string
}

export interface ISource {
  id: string
  name: string
}

//Weather
export interface IWeather {
  coord: {
    lon: number
    lat: number
  }
  weather: IWeatherDetail[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}
export interface IWeatherDetail {
  id: number
  main: string
  descriptions: string
  icon: string
}
