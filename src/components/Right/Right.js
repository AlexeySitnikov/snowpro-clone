import { SchoolElement } from '../SchoolElement/SchoolElement'
import styles from './style.module.scss'

export function Right() {
  return (
    <div className={`${styles.right_element}`}>
      <div className={`${styles.right_elementLabel}`}>
        <h2>Школы</h2>
      </div>
      <SchoolElement />
      <div className={`${styles.right_elementDiv}`}>
        <div className={`${styles.right_elementLabel}`}>
          <h2>Все школы</h2>
        </div>
      </div>
    </div>
  )
}
