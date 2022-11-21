import NewsList from '../../components/NewsList'
import Layout from '../../layouts/Layout'

interface BussinesPageProps {}

const Business: React.FC<BussinesPageProps> = () => {
  return (
    <Layout>
      <NewsList title="Business" />
    </Layout>
  )
}

export default Business
