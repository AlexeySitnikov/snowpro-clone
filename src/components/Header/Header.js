import './style.scss'

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
      <img className="header__logo" src="img/logo.svg" alt="logo" />
      <div className="header__controls">
        <a href="#form">Контакты</a>
        <button type="button" href="#">Заказать</button>
      </div>
    </header>
  )
}
