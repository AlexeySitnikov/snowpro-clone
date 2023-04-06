import './style.scss'
import logo from '../../utils/image/logo1.png'
import picture from '../../utils/image/20let_ras_ok.jpg'

export function MenuBar() {
  return (
    <div className="container_MenuBar">
      <div className="menuBar_logo">
        <img src={`${logo}`} alt="logo" />
      </div>
      <div className="menuBar">
        <div>О нас</div>
        <div>Календарь школ</div>
        <div>Инструкторы</div>
        <div>Фото и видео</div>
        <div>Контакты</div>
      </div>
      <div>
        <img src={`${picture}`} className="picture" alt="label" />
      </div>
      <div className="buttonsUnderPicture">
        <button type="button">Записаться</button>
        <button type="button">Регистрация</button>
        <button type="button">Логин</button>
      </div>
    </div>
  )
}
