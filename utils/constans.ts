import { FiHome, FiPlay } from 'react-icons/fi'
import { GiHealthNormal } from 'react-icons/gi'
import { IoMedalOutline } from 'react-icons/io5'
import { MdOutlineBusinessCenter, MdOutlineHealthAndSafety } from 'react-icons/md'
import { IRoute } from '../types/types'

export const routes: IRoute[] = [
  {
    route: '/business',
    name: 'Бизнес',
    component: MdOutlineBusinessCenter,
    pageName: 'Бизнес'
  },
  {
    route: '/health',
    name: 'Здоровье',
    component: MdOutlineHealthAndSafety,
    pageName: 'Здоровье'
  },
  {
    route: '/entertainment',
    name: 'Медиа',
    component: FiPlay,
    pageName: 'Медиа'
  },
  { route: '/sports', name: 'Спорт', component: IoMedalOutline, pageName: 'Спорт' },
  { route: '/covid', name: 'Covid', component: GiHealthNormal, pageName: 'Covid' }
]
