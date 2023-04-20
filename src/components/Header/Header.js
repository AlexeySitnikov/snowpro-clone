import styles from './header_style.module.scss'
import scrollStyle from './header_scrolled.module.scss'
import logo from '../../utils/image/logo1.png'

export function Header() {
  function updateScroll() {
    if (window.scrollY > 0) {
      document.querySelector('header').classList.add(scrollStyle.header__scrolled)
      // console.log(styles.success)
    } else {
      document.querySelector('header').classList.remove(scrollStyle.header__scrolled)
      // console.log((document.querySelector('header').className))
    }
  }
  window.addEventListener('scroll', updateScroll)

  return (
    <header className={`${styles.header__container}`}>
      <div className={`${styles.header__logo}`}>
        <img src={`${logo}`} alt="logo" />
      </div>
      <div className={`${styles.header__controls}`}>
        <div className={`${styles.header__contacts}`}>
          <button type="button">Контакты</button>
        </div>
        <div className={`${styles.header__makeOrder}`}>
          <button type="button" href="#">Заказать</button>
        </div>
      </div>

    </header>
  )
}
