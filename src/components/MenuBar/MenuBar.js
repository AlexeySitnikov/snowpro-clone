import './style.scss'
import logo from '../../utils/image/logo1.png'
import backGroundLogo from '../../utils/image/head_bg1.png'

export function MenuBar() {
  return (
    <div className="container_MenuBar">
      <div className="menuBar_logo">
        <img src={`${logo}`} alt="logo" />
      </div>
      <div>
        <img src={`${backGroundLogo}`} alt="asd" />
      </div>
      <div className="menuBar">
        <div>Menu_1</div>
        <div>Menu_2</div>
        <div>Menu_3</div>
        <div>Menu_4</div>
      </div>
    </div>
  )
}
