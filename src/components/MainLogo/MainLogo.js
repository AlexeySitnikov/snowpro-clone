import picture from '../../utils/image/20let_ras_ok.jpg'
import styles from './style.module.scss'

export function MainLogo() {
  return (
    <div>
      <img src={`${picture}`} className={`${styles.picture}`} alt="label" />
    </div>
  )
}
