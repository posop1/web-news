import axios from 'axios'
import { FC } from 'react'
import NewsList from '../components/NewsList'
import Layout from '../layouts/Layout'
import { INews } from '../types/types'

interface HomePageProps {
  news: INews
}

export const getStaticProps = async () => {
  const { data } = await axios.get(
    'https://newsapi.org/v2/top-headlines?country=ru&pageSize=20&apiKey=64a74bc147c14569bd3b46602f5cde5f'
  )

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { news: data }
  }
}

const Home: FC<HomePageProps> = ({ news }) => {
  return (
    <Layout title="Top News">
      <NewsList
        title="Top News"
        news={news}
      />
    </Layout>
  )
}

export default Home
