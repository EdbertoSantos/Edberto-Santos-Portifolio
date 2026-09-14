import HeaderNav from './components/HeaderNav/HeaderNav'
import Home from './section/Home/Home'
import Projetos from './section/Projetos/Projetos'
import Sobre from './section/Sobre/Sobre'

function App() {
  return (
    <main>
      <HeaderNav />
      <Home />
      <Sobre />
      <Projetos />
    </main>
  )
}

export default App