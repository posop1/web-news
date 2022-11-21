import { FiHome, FiPlay } from 'react-icons/fi'
import { GiHealthNormal } from 'react-icons/gi'
import { IoMedalOutline } from 'react-icons/io5'
import { MdOutlineBusinessCenter, MdOutlineHealthAndSafety } from 'react-icons/md'
import { IRoute } from '../types/types'

export const routes: IRoute[] = [
  {
    route: '/business',
    name: 'Business',
    component: MdOutlineBusinessCenter,
    pageName: 'business'
  },
  {
    route: '/health',
    name: 'Health',
    component: MdOutlineHealthAndSafety,
    pageName: 'health'
  },
  {
    route: '/entertainment',
    name: 'Entertainment',
    component: FiPlay,
    pageName: 'entertainment'
  },
  { route: '/sports', name: 'Sports', component: IoMedalOutline, pageName: 'sports' },
  { route: '/covid', name: 'Covid', component: GiHealthNormal, pageName: 'covid' }
]
