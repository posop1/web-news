import { FiHome, FiPlay } from 'react-icons/fi'
import { GiHealthNormal } from 'react-icons/gi'
import { IoMedalOutline } from 'react-icons/io5'
import { MdOutlineBusinessCenter, MdOutlineHealthAndSafety } from 'react-icons/md'
import { IRoute } from '../types/types'

export const routes: IRoute[] = [
  { route: '/', name: 'Top News', component: FiHome },
  {
    route: '/news/business',
    name: 'Business',
    component: MdOutlineBusinessCenter
  },
  {
    route: '/news/health',
    name: 'Health',
    component: MdOutlineHealthAndSafety
  },
  {
    route: '/news/entertainment',
    name: 'Entertainment',
    component: FiPlay
  },
  { route: '/news/sports', name: 'Sports', component: IoMedalOutline },
  { route: '/news/covid', name: 'Covid', component: GiHealthNormal }
]
