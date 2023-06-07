/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom'
import styles from './header_style.module.scss'
import scrollStyle from './header_scrolled.module.scss'
import logo from '../../utils/image/logo1.png'

export function Header() {
  function updateScroll() {
    if ((window.scrollY > 0) && (window.innerWidth > 480)) {
      document.querySelector('header').classList.add(scrollStyle.header__scrolled)
    } else {
      document.querySelector('header').classList.remove(scrollStyle.header__scrolled)
    }
  }
  window.addEventListener('scroll', updateScroll)

  const navigate = useNavigate()
  const logoClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/snowpro-clone/')
  }

  return (
    <header className={`${styles.header__container}`}>
      <div className={`${styles.header__logo}`} onClick={logoClickHandler}>
        <img
          src={`${logo}`}
          alt="logo"
        />
      </div>
      <div className={`${styles.header__controls}`}>
        <div className={`${styles.header__contacts}`}>
          <button type="button">
            <a href="#contacts">
              Контакты
            </a>
          </button>
        </div>
        <div className={`${styles.header__makeOrder}`}>
          <button type="button" href="#">Заказать</button>
        </div>
      </div>

    </header>
  )
}
