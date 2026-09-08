import './Sobre.css'

function Sobre() {
  return (
    <section className="sobre">

      <div className="sobre__content">
        <h1 className="sobre__title">Pessoa, processo e propósito</h1>
        <div className="sobre__img_content">
          <div>
            <img
              src="/Edberto-Santos-Portifolio/jose.edberto.png"
              alt="José Edberto"
              className="sobre__img"
            />
            <p>Imagem de uma pessoa</p>
            <p>Descrição da imagem</p>
          </div>
          <div className="sobre__text_content">
            <p>Conteúdo da imagem</p>
            <div className="sobre__text">
              <p>Curiosidades</p>
              <ul>
                <li>Basquete</li>
                <li>Jiu-jitsu</li>
                <li>Ciclismo</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sobre__SoftSkills">
          <ul>
            <li>Comunicação</li>
            <li>Trabalho em equipe</li>
            <li>Resolução de problemas</li>
          </ul>
        </div>
        <div className="sobre__HardSkills">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="sobre__recomendation">
          <ul>
            <li>
              <p className="sobre__recomendation-quote">"Excelente profissional..."</p>
              <div>
                <strong className="sobre__recomendation-name">Nome</strong>
                <span className="sobre__recomendation-role">Cargo · Empresa</span>
              </div>
            </li>
            <li>
              <p className="sobre__recomendation-quote">"Excelente profissional..."</p>
              <div>
                <strong className="sobre__recomendation-name">Nome</strong>
                <span className="sobre__recomendation-role">Cargo · Empresa</span>
              </div>
            </li>
            <li>
              <p className="sobre__recomendation-quote">"Excelente profissional..."</p>
              <div>
                <strong className="sobre__recomendation-name">Nome</strong>
                <span className="sobre__recomendation-role">Cargo · Empresa</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Sobre