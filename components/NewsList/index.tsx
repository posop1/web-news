import { INews } from '../../types/types'
import NewsItem from '../NewsItem'
import s from './NewsList.module.scss'

interface NewsListProps {
  title: string
  news: INews
}

const NewsList: React.FC<NewsListProps> = ({ title, news }) => {
  return (
    <div className={s.news__list}>
      <div className={s.title__container}>
        <h2 className={s.title}>{title}</h2>
      </div>
      {news.articles.length === 0 ? (
        <div className={s.notFound}>
          <h1>NOT FOUND</h1>
        </div>
      ) : (
        <div className={s.list}>
          {news.articles.map(({ author, content, description, source, title, url, urlToImage }) => (
            <NewsItem
              key={title}
              author={author}
              description={description}
              source={source}
              title={title}
              url={url}
              urlToImage={urlToImage}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default NewsList
