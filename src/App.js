import styles from './App.module.scss'
import { Center } from './components/Center/Center'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Left } from './components/Left/Left'
import { Right } from './components/Right/Right'

function App() {
  return (
    <>
      <div className={`${styles.header__sticky}`}>
        <Header />
      </div>
      <div className={`${styles.container}`}>
        <Left />
        <Center />
        <Right />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
