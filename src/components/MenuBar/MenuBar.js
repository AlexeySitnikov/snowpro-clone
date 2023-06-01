/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from './style.module.scss'
import { MainLogo } from '../MainLogo/MainLogo'
import { MainButtons } from '../MainButtons/MainButtons'

export function MenuBar() {
  return (
    <div className={`${styles.container_MenuBar}`}>
      <MainLogo />
      <MainButtons />
    </div>
  )
}
