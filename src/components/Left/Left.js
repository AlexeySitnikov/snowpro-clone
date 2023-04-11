import { AdsElement } from '../AdsElement/AdsElement'
import { ForumElement } from '../ForumElement/ForumElement'
import { SearchBar } from '../SearchBar/SearchBar'
import styles from './style.module.scss'

export function Left() {
  return (
    <div className={`${styles.left_element}`}>
      <div className={`${styles.left_elementLabel}`}>
        <h2>Форум</h2>
      </div>
      <ForumElement />
      <br />
      <SearchBar />
      <br />
      <AdsElement />
    </div>
  )
}
