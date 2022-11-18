import Head from 'next/head'
import SideBar from '../components/SideBar'
import s from '../styles/app.module.scss'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Web-news'}</title>
        <meta
          name="robots"
          content="index, follow"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <div className={s.app}>
        <SideBar />
        {children}
      </div>
    </>
  )
}

export default Layout
