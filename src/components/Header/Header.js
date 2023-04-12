import './style.scss'
import logo from '../../utils/image/logo1.png'

export function Header() {
  function updateScroll() {
    if (window.scrollY > 0) {
      document.querySelector('header').classList.add('header__scrolled')
    } else {
      document.querySelector('header').classList.remove('header__scrolled')
    }
  }
  window.addEventListener('scroll', updateScroll)
  return (
    <header>
      <img className="header__logo" src={`${logo}`} alt="logo" />
      <div className="header__controls">
        <a href="#form">Контакты</a>
        <button type="button" href="#">Заказать</button>
      </div>
    </header>
  )
}
