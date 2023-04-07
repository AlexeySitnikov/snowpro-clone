import styles from './style.module.scss'
import logo from '../../utils/image/logo1.png'
import picture from '../../utils/image/20let_ras_ok.jpg'
import separator from '../../utils/image/top_menu_separator.png'

export function MenuBar() {
  return (
    <div className={`${styles.container_MenuBar}`}>
      <div className={`${styles.menuBar_logo}`}><img src={`${logo}`} alt="logo" /></div>
      <div className={`${styles.menuBar}`}>
        <div className={`${styles.labelAndSeparator}`}>
          <div className={`${styles.label}`}>О нас</div>
          <div className={`${styles.line}`}><img src={`${separator}`} alt="separator" /></div>
        </div>
        <div className={`${styles.labelAndSeparator}`}>
          <div className={`${styles.label}`}>Календарь школ</div>
          <div className={`${styles.line}`}><img src={`${separator}`} alt="separator" /></div>
        </div>
        <div className={`${styles.labelAndSeparator}`}>
          <div className={`${styles.label}`}>Инструкторы</div>
          <div className={`${styles.line}`}><img src={`${separator}`} alt="separator" /></div>
        </div>
        <div className={`${styles.labelAndSeparator}`}>
          <div className={`${styles.label}`}>Фото и видео</div>
          <div className={`${styles.line}`}><img src={`${separator}`} alt="separator" /></div>
        </div>
        <div className={`${styles.labelAndSeparator}`}>
          <div className={`${styles.label}`}>Контакты</div>
        </div>
      </div>
      <div>
        <img src={`${picture}`} className={`${styles.picture}`} alt="label" />
      </div>
      <div className={`${styles.buttonsUnderPicture}`}>
        <button type="button">Записаться</button>
        <button type="button">Регистрация</button>
        <button type="button">Логин</button>
      </div>
    </div>
  )
}
