import { OneNews } from './OneNews'
import styles from './style.module.scss'

export function NewsElement() {
  return (
    <div className={`${styles.container}`}>
      <h2>Статьи и материалы</h2>
      <div>
        <OneNews />
      </div>
    </div>
  )
}
