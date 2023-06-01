import { Center } from '../Center/Center'
import { Left } from '../Left/Left'
import { Right } from '../Right/Right'
import styles from './style.module.scss'

export function MainPage() {
  return (
    <div className={`${styles.main_page}`}>
      <div className={`${styles.left}`}>
        <Left />
      </div>
      <div className={`${styles.center}`}>
        <Center />
      </div>
      <div className={`${styles.right}`}>
        <Right />
      </div>
    </div>
  )
}
