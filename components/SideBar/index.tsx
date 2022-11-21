import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import logo from '../../public/logo.svg'
import { routes } from '../../utils/constans'
import s from './SideBar.module.scss'

const SideBar: React.FC = () => {
  const router = useRouter()

  return (
    <div className={s.sidebar}>
      <Link
        href="/"
        className={s.logo__container}
      >
        <Image
          src={logo}
          alt="logo"
          width="29"
        />
        <h1 className={s.title}>Aster News</h1>
      </Link>
      <div className={s.links}>
        {routes.map((link) => (
          <Link
            key={link.name}
            href={link.pageName}
            className={router.pathname == link.route ? s.active : s.link}
          >
            <div className={s.link__container}>
              <link.component size={23} />
              <p>{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar
