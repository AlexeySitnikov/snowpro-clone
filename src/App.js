import { Outlet } from 'react-router-dom'
import styles from './App.module.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MenuBarButtons } from './components/MenuBar/MenuBarButtons'
// import logo from './utils/image/logo1.png'

function App() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header__sticky}`}>
        <Header />
      </div>
      <div className={`${styles.container_MenuBar}`}>
        <MenuBarButtons />
      </div>
      <Outlet />
      <div className={`${styles.footer__container}`}>
        <Footer />
      </div>
    </div>
  )
}

export default App
