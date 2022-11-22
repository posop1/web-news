import axios from 'axios'
import NewsList from '../components/NewsList'
import Layout from '../layouts/Layout'
import type { INews } from '../types/types'

interface NewsPagesProps {
  news: INews
  pageName: string
}

export const getServerSideProps: any = async (context: any) => {
  const { pageName } = context.params

  const { data } = await axios.get(
    `https://newsapi.org/v2/everything?q=${pageName}&language=ru&apiKey=64a74bc147c14569bd3b46602f5cde5f`
  )

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { news: data, pageName: pageName }
  }
}

const NewsPages: React.FC<NewsPagesProps> = ({ news, pageName }) => {
  const title = pageName.charAt(0).toUpperCase() + pageName.slice(1)

  return (
    <Layout>
      <NewsList
        title={title}
        news={news}
      />
    </Layout>
  )
}

export default NewsPages
