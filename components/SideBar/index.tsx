import { FiHome } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.svg'
import { routes } from '../../utils/constans'
import SubscribeBage from '../SubscribeBage'
import s from './SideBar.module.scss'

const SideBar: React.FC = () => {
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
        <Link
          href="/"
          className={s.link}
        >
          <div className={s.link__container}>
            <FiHome size={23} />
            <p>Top News</p>
          </div>
        </Link>
        {routes.map((link) => (
          <Link
            key={link.name}
            href={link.pageName}
            className={s.link}
          >
            <div className={s.link__container}>
              <link.component size={23} />
              <p>{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <hr className={s.hr} />
      <SubscribeBage />
    </div>
  )
}

export default SideBar
