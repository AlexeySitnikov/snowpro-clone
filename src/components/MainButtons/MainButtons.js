import styles from './style.module.scss'

export function MainButtons() {
  return (
    <div className={`${styles.buttonsUnderPicture}`}>
      <button type="button">Записаться</button>
      <button type="button">Регистрация</button>
      <button type="button">Логин</button>
    </div>
  )
}
