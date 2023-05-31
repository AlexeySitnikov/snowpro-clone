import { MenuBar } from '../MenuBar/MenuBar'
import { NewsElement } from '../NewsElement/NewsElement'
import styles from './style.module.scss'

export function Center() {
  return (
    <div id="b" className={`${styles.center}`}>
      <MenuBar />
      <NewsElement />
    </div>
  )
}
