import { MenuBar } from '../MenuBar/MenuBar'
import { NewsElement } from '../NewsElement/NewsElement'
import './style.scss'

export function Center() {
  return (
    <div className="center">
      <MenuBar />
      <NewsElement />
    </div>
  )
}
