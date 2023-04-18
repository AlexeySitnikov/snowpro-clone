/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './style.module.scss'

export function Footer() {
  return (
    <footer>
      <div className={`${styles.footer__container}`}>
        <div className={`${styles.footer__label}`}>
          <h2>Наши партнеры</h2>
        </div>
        <div className={`${styles.footer__partners}`}>
          <div>
            <img src="https://snowpro.ru/sites/default/files//styles/partner/public/PacGroup.jpg?itok=2mPAEWwS" width="122" height="44" alt="" />
          </div>
          <div>
            <img src="https://snowpro.ru/sites/default/files//styles/partner/public/snowavalanche_logo.png?itok=S7qwmcZl" width="122" height="59" alt="" />
          </div>
          <div>
            <img src="https://snowpro.ru/sites/default/files//styles/partner/public/TrialSport_0.jpg?itok=JbCtlJJu" width="122" height="43" alt="" />
          </div>
          <div>
            <img src="https://snowpro.ru/sites/default/files//styles/partner/public/attachment-1.gif?itok=k9xl4rPg" width="68" height="68" alt="" />
          </div>
          <div>
            <img src="https://snowpro.ru/sites/default/files//styles/partner/public/pp-banner_0.gif?itok=nM605VHe" width="119" height="68" alt="" />
          </div>
          <div>
            <img src="https://snowpro.ru/sites/default/files//styles/partner/public/podpis.png?itok=tx2WspnM" width="122" height="24" alt="" />
          </div>
        </div>
        <br />
        <div className={`${styles.footer__info}`}>
          <div className={`${styles.footer__group}`}>
            <h3>Позвонить нам:</h3>
            <div className={`${styles.footer__links}`}>
              <a href="tel:74959999999">+7 (495) 999-99-99</a>
            </div>
          </div>
          <div className={`${styles.footer__group}`}>
            <h3>Решения для дома:</h3>
            <div className={`${styles.footer__links}`}>
              <a href="#">Солнечные панели GreenRobotic!</a>
              <a href="#">Системы солнечных панелей GreenStation</a>
            </div>
          </div>
          <div className={`${styles.footer__group}`}>
            <h3>Компания</h3>
            <div className={`${styles.footer__links}`}>
              <a href="#">Контакты</a>
              <a href="#">Вакансии</a>
              <a href="#">СМИ</a>
            </div>
          </div>
        </div>
        <br />
        <div className={`${styles.footer__copyright}`}>
          GreenCorp © 2021
        </div>
      </div>
    </footer>
  )
}
