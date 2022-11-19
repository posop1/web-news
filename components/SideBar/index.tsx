import Image from 'next/image'
import logo from '../../public/logo.svg'
import s from './SideBar.module.scss'

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.logo__container}>
        <Image
          src={logo}
          alt="logo"
          width="29"
        />
        <h1 className={s.title}>Aster News</h1>
      </div>
    </div>
  )
}

export default SideBar
