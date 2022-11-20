import { FiHome, FiPlay } from 'react-icons/fi'
import { GiHealthNormal } from 'react-icons/gi'
import { IoMedalOutline } from 'react-icons/io5'
import { MdOutlineBusinessCenter, MdOutlineHealthAndSafety } from 'react-icons/md'
import { IRoute } from '../types/types'

export const routes: IRoute[] = [
  { route: '/', name: 'Top News', component: FiHome },
  { route: '/business', name: 'Business', component: MdOutlineBusinessCenter },
  { route: '/health', name: 'Health', component: MdOutlineHealthAndSafety },
  { route: '/entertainment', name: 'Entertainment', component: FiPlay },
  { route: '/sports', name: 'Sports', component: IoMedalOutline },
  { route: '/covid', name: 'Covid', component: GiHealthNormal }
]
