import { INews } from '../../types/types'
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
      <div className={s.list}></div>
    </div>
  )
}

export default NewsList
