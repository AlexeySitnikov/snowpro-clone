/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom'
import styles from './style.module.scss'
import separator from '../../utils/image/top_menu_separator.png'

export function MenuBarButtons() {
  const navigate = useNavigate()
  const aboutUsClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('about')
  }

  const schoolCalendarClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('schools')
  }

  const instructorsClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('instructors')
  }

  const mediaClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('media')
  }

  const contactsClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('contacts')
  }

  return (
    <div className={`${styles.menuBar}`}>
      <div className={`${styles.labelAndSeparator}`}>
        <div className={`${styles.label}`} onClick={aboutUsClickHandler}>О нас</div>
        <div className={`${styles.line}`}><img src={`${separator}`} alt="separator" /></div>
      </div>
      <div className={`${styles.labelAndSeparator}`}>
        <div className={`${styles.label}`} onClick={schoolCalendarClickHandler}>Календарь школ</div>
        <div className={`${styles.line}`}><img src={`${separator}`} alt="separator" /></div>
      </div>
      <div className={`${styles.labelAndSeparator}`}>
        <div className={`${styles.label}`} onClick={instructorsClickHandler}>Инструкторы</div>
        <div className={`${styles.line}`}><img src={`${separator}`} alt="separator" /></div>
      </div>
      <div className={`${styles.labelAndSeparator}`}>
        <div className={`${styles.label}`} onClick={mediaClickHandler}>Фото и видео</div>
        <div className={`${styles.line}`}><img src={`${separator}`} alt="separator" /></div>
      </div>
      <div className={`${styles.labelAndSeparator}`}>
        <div className={`${styles.label}`} onClick={contactsClickHandler}>Контакты</div>
      </div>
    </div>
  )
}
