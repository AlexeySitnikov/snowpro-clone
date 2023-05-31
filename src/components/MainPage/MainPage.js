import { Center } from '../Center/Center'
import { Left } from '../Left/Left'
import { Right } from '../Right/Right'
import styles from './style.module.scss'

export function MainPage() {
  return (
    <div className={`${styles.main_page}`}>
      <div id="a">
        <Left />
      </div>
      <div id="b">
        <Center />
      </div>
      <div id="c">
        <Right />
      </div>
    </div>
  )
}
