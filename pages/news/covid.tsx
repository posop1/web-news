import NewsList from '../../components/NewsList'
import Layout from '../../layouts/Layout'

interface CovidPageProps {}

const CovidPage: React.FC<CovidPageProps> = () => {
  return (
    <Layout>
      <NewsList title="CovidPage" />
    </Layout>
  )
}

export default CovidPage
