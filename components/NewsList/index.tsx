import s from './NewsList.module.scss'

interface NewsListProps {
  title: string
}

const NewsList: React.FC<NewsListProps> = ({ title }) => {
  return (
    <div className={s.news__list}>
      <h1>{title}</h1>
    </div>
  )
}

export default NewsList
