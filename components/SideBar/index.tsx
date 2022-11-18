import s from './SideBar.module.scss'

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return <div className={s.sidebar}></div>
}

export default SideBar
