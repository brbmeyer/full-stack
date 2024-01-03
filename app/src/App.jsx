import styles from './App.module.css'
import { NavBar } from './components/NavBar/NavBar'


function App() {
  return (
    <div className={styles.container}>
      <NavBar title={'Poll Creator'}/>
    </div>
  )
}

export default App
