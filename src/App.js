import { Outlet } from 'react-router-dom'
import styles from './App.module.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header__sticky}`}>
        <Header />
      </div>
      <Outlet />
      <div className={`${styles.footer__container}`}>
        <Footer />
      </div>
    </div>
  )
}

export default App
