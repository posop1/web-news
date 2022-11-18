import Layout from '../layouts/Layout'
import s from '../styles/otherPage/ErrorPage.module.scss'

const ErrorPage500: React.FC = () => {
  return (
    <Layout title="500 - not found">
      <div className={s.ErrorPage}>
        <h1>500 - Not Found</h1>
      </div>
    </Layout>
  )
}

export default ErrorPage500
