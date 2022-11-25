import { SlPresent } from 'react-icons/sl'
import s from './SubscribeBage.module.scss'

const SubscribeBage: React.FC = () => {
  return (
    <div className={s.Badge}>
      <div>
        <SlPresent
          size={23}
          color="white"
        />
        <p className={s.badge__title}>Подписка Премиум</p>
      </div>
      <div>
        <p className={s.badge__price}>
          130 <span>руб/м</span>
        </p>
        <button className={s.badge__btn}>Подключить</button>
      </div>
    </div>
  )
}

export default SubscribeBage
