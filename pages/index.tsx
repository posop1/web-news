import { FC } from 'react'
import NewsList from '../components/NewsList'
import Layout from '../layouts/Layout'

const Home: FC = () => {
  return (
    <Layout>
      <NewsList title="Test" />
    </Layout>
  )
}

export default Home
