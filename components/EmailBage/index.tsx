import s from './EmailBage.module.scss'

interface EmailBageProps {}

const EmailBage: React.FC<EmailBageProps> = () => {
  return (
    <div className={s.EmailBage}>
      <p className={s.EmailBage__text}>Подписка на рассылку новостей</p>
      <input
        type="text"
        placeholder="Email..."
        className={s.EmailBage__inp}
      />
      <button className={s.EmailBage__btn}>Подключить</button>
    </div>
  )
}

export default EmailBage
