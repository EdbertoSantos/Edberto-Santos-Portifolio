import './Sobre.css'

const softSkills = [
  'Comunicação com clientes',
  'Trabalho em equipe',
  'Resolução de problemas',
  'Visão analítica',
  'Proatividade',
  'Adaptabilidade',
]

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
            <p>
              Sou o Edberto, Comecei minha trajetória em tecnologia no suporte ao cliente, respondendo chamados. Daí vim para o back-end.
              Hoje curso Licenciatura em Computação na UFRPE e sou pesquisador de iniciação científica, trabalhando com visão computacional e IA para detectar ocorrências de segurança pública a partir de imagens de drone que é um projeto que me deixa genuinamente empolgado, porque mistura tecnologia com impacto real.
              Gosto de aprender fazendo. Em hackathons, já construí desde uma API de machine learning para prever vulnerabilidade social até uma plataforma que verifica vazamentos de dados pessoais. No meu tempo "livre" (ou o que sobra dele), estou estudando Java, explorando AWS e mexendo com Salesforce sempre com um projeto novo puxando o outro.
              No fim das contas, o que me motiva é resolver problema de verdade: entender o que tá quebrado, por que quebrou, e construir algo melhor. Seja automatizando um processo chato de e-mail ou treinando um modelo pra reconhecer padrões em imagem, é essa curiosidade que me trouxe até aqui e é ela que eu quero continuar seguindo.
            </p>

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
          <p>Soft Skills</p>
          <ul>
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="sobre__recomendation">
          <p>Recomendações</p>
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