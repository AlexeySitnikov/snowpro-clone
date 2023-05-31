/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './style.module.scss'
import logo from '../../utils/image/logo1.png'

export function Footer() {
  return (
    <footer>
      <section id="contacts">
        <div className={`${styles.footer__container}`}>
          <div className={`${styles.footer__label}`}>
            <h2>Наши партнеры</h2>
          </div>
          <div className={`${styles.footer__partners}`}>
            <div>
              <img src="https://snowpro.ru/sites/default/files//styles/partner/public/PacGroup.jpg?itok=2mPAEWwS" alt="" />
              {/* width="122" height="44" */}
            </div>
            <div>
              <img src="https://snowpro.ru/sites/default/files//styles/partner/public/snowavalanche_logo.png?itok=S7qwmcZl" alt="" />
              {/* width="122" height="59"  */}
            </div>
            <div>
              <img src="https://snowpro.ru/sites/default/files//styles/partner/public/TrialSport_0.jpg?itok=JbCtlJJu" alt="" />
              {/* width="122" height="43"  */}
            </div>
            <div>
              <img src="https://snowpro.ru/sites/default/files//styles/partner/public/attachment-1.gif?itok=k9xl4rPg" alt="" />
              {/* width="68" height="68"  */}
            </div>
            <div>
              <img src="https://snowpro.ru/sites/default/files//styles/partner/public/pp-banner_0.gif?itok=nM605VHe" alt="" />
              {/* width="119" height="68"  */}
            </div>
            <div>
              <img src="https://snowpro.ru/sites/default/files//styles/partner/public/podpis.png?itok=tx2WspnM" alt="" />
              {/* width="122" height="24"  */}
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
            <img className={`${styles.footer__logo}`} src={`${logo}`} alt="logo" />
          </div>
        </div>
      </section>
    </footer>
  )
}
