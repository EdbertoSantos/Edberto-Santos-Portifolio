import FloatingCircles from '../../components/FloatingCircles/FloatingCircles'
import './Home.css'

function Home() {
  return (
    <section className="home">

      <FloatingCircles />


      <div className="home__content">

        <img
          src="/Edberto-Santos-Portifolio/Group8.png"
          alt="Edberto Santos"
          className="home__image"
        />

        <h1>Edberto Santos</h1>

        <h2>Back-End</h2>

        <p>
          Desenvolvedor apaixonado por criar
          interfaces modernas e experiências digitais.
        </p>

      </div>

    </section>
  )
}

export default Home