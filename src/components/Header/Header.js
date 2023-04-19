import styles from './header_style.scss'
import logo from '../../utils/image/logo1.png'

export function Header() {
  function updateScroll() {
    if (window.scrollY > 0) {
      document.querySelector('header').classList.add(styles.header__scrolled)
      // console.log(styles.success)
    } else {
      document.querySelector('header').classList.remove('header__scrolled')
      // console.log((document.querySelector('header').className))
    }
  }
  window.addEventListener('scroll', updateScroll)

  return (
    <header>
      <img className="header__logo" src={`${logo}`} alt="logo" />
      <div className="header__controls">
        <div className="header__contacts">
          <a href="#form">Контакты</a>
        </div>
        <div className="header__makeOrder">
          <button type="button" href="#">Заказать</button>
        </div>
      </div>
    </header>
  )
}
