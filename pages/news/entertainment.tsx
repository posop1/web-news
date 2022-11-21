import NewsList from '../../components/NewsList'
import Layout from '../../layouts/Layout'

interface EntertainmentPageProps {}

const EntertainmentPage: React.FC<EntertainmentPageProps> = () => {
  return (
    <Layout>
      <NewsList title="EntertainmentPage" />
    </Layout>
  )
}

export default EntertainmentPage
