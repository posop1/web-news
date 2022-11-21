import { IconType } from 'react-icons/lib'

export interface IRoute {
  route: string
  name: string
  component: IconType
  pageName: string
}

export interface INews {
  status: string
  totalResults: number
  articles: IArticle[]
}

export interface IArticle {
  author?: string
  content: string
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
