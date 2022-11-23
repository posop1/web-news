/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import type { IArticle } from '../../types/types'
import s from './NewsItem.module.scss'

const NewsItem: React.FC<IArticle> = ({ author, description, source, title, url, urlToImage }) => {
  return (
    <div className={s.NewsItem}>
      <div className={s.text__container}>
        <h4 className={s.title}>{title}</h4>
        <p className={s.text}>{description}</p>
        <div className={s.links}>
          <p>{author}</p>
          <p>{source.name}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Read
          </a>
        </div>
      </div>
      <img
        src={urlToImage}
        alt="news image"
        width={350}
        className={s.image}
      />
    </div>
  )
}

export default NewsItem
