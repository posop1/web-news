import Layout from '../layouts/Layout'
import s from '../styles/other/ErrorPage.module.scss'

const ErrorPage404: React.FC = () => {
  return (
    <Layout title="404 - not found">
      <div className={s.ErrorPage}>
        <h1>404 - Not Found</h1>
      </div>
    </Layout>
  )
}

export default ErrorPage404
