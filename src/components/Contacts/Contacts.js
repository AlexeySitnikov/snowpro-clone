/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './style.module.scss'

export function Contacts() {
  return (
    <div className={`${styles.footer__container}`}>
      <br />
      <div className={`${styles.footer__info}`}>
        <div className={`${styles.footer__group}`}>
          <h3>Позвонить нам:</h3>
          <div className={`${styles.footer__links}`}>
            <a href="tel:74959999999">+7 (495) 999-99-99</a>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}
