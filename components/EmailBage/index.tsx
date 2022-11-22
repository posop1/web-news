import s from './EmailBage.module.scss'

interface EmailBageProps {}

const EmailBage: React.FC<EmailBageProps> = () => {
  return (
    <div className={s.EmailBage}>
      <p className={s.EmailBage__text}>Subscribe to our newsletter</p>
      <input
        type="text"
        placeholder="Enter Email"
        className={s.EmailBage__inp}
      />
      <button className={s.EmailBage__btn}>Subscribe</button>
    </div>
  )
}

export default EmailBage
