import { ucs2 } from 'punycode'
import { GetServerSideProps } from 'next'
import NewsList from '../components/NewsList'
import Layout from '../layouts/Layout'
import { INews } from '../types/types'

interface NewsPagesProps {
  news: INews
  pageName: string
}

export const getServerSideProps: any = async (context: any) => {
  const { pageName } = context.params
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${pageName}&apiKey=64a74bc147c14569bd3b46602f5cde5f`
  )
  const data = await res.json()

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
      <NewsList title={title} />
    </Layout>
  )
}

export default NewsPages
