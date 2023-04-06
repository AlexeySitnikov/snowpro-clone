import { OneNews } from './OneNews'
import styles from './style.module.scss'

export function NewsElement() {
  return (
    <div className={`${styles.container}`}>
      <div>Статьи и материалы</div>
      <div>
        <OneNews />
      </div>
    </div>
  )
}
