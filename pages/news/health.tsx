import NewsList from '../../components/NewsList'
import Layout from '../../layouts/Layout'

interface HealthPageProps {}

const HealthPage: React.FC<HealthPageProps> = () => {
  return (
    <Layout>
      <NewsList title="HealthPage" />
    </Layout>
  )
}

export default HealthPage
