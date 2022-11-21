import NewsList from '../../components/NewsList'
import Layout from '../../layouts/Layout'

interface SprotsPageProps {}

const SprotsPage: React.FC<SprotsPageProps> = () => {
  return (
    <Layout>
      <NewsList title="SprotsPage" />
    </Layout>
  )
}

export default SprotsPage
