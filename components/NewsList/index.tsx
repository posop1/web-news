import { INews } from '../../types/types'
import s from './NewsList.module.scss'

interface NewsListProps {
  title: string
  news: INews
}

const NewsList: React.FC<NewsListProps> = ({ title, news }) => {
  return (
    <div className={s.news__list}>
      <h1>{title}</h1>
    </div>
  )
}

export default NewsList
