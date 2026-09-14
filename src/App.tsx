import HeaderNav from './components/HeaderNav/HeaderNav'
import Home from './section/Home/Home'
import Projetos from './section/Projetos/Projetos'
import Sobre from './section/Sobre/Sobre'
import Trajetoria from './section/Trajetoria/Trajetoria'

function App() {
  return (
    <main>
      <HeaderNav />
      <Home />
      <Sobre />
      <Projetos />
      <Trajetoria />
    </main>
  )
}

export default App