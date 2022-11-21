import NewsList from '../components/NewsList'
import Layout from '../layouts/Layout'

interface NewsPagesProps {}

export const getServerSideProps = async (context) => {
  console.log(context)

  const { article } = context.params
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${article}&apiKey=64a74bc147c14569bd3b46602f5cde5f`
  )
  const data = await res.json()

  return {
    props: { news: data }
  }
}

const NewsPages: React.FC<NewsPagesProps> = ({ news }) => {
  console.log(news)

  return (
    <Layout>
      <NewsList title="te" />
    </Layout>
  )
}

export default NewsPages
