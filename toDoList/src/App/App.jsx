import styles from './App.module.css'
import bg from './bg.webp'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
function App() {
  return (
    <div className={styles.toDoList} style={{backgroundImage: `url("${bg}")`}} >
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
