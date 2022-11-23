import type { IArticle } from '../../types/types'
import s from './NewsItem.module.scss'

const NewsItem: React.FC<IArticle> = ({
  author,
  content,
  description,
  source,
  title,
  url,
  urlToImage
}) => {
  return <div className={s.NewsItem}></div>
}

export default NewsItem
