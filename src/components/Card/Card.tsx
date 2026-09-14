import './Card.css'

export interface Projeto {
    id: number
    tag: string
    nome: string
    descricao: string
    imagem: string
    linkProjeto?: string
    modalConteudo: {
        tituloCompleto: string
        descricaoCompleta: string
        tecnologias: string[]
        imagens: string[]
    }
}

interface CardProps {
    projeto: Projeto
    onClick: (projeto: Projeto) => void
}

function Card({ projeto, onClick }: CardProps) {
    return (
        <article className="card" onClick={() => onClick(projeto)}>
            <div className="card__imagem-wrapper">
                <span className="card__tag">{projeto.tag}</span>
                <img className="card__imagem" src={projeto.imagem} alt={projeto.nome} />
            </div>

            <div className="card__footer">
                <h3 className="card__nome">{projeto.nome}</h3>
                <p className="card__descricao">{projeto.descricao}</p>

                <button
                    className="card__botao"
                    onClick={(e) => {
                        e.stopPropagation()
                        onClick(projeto)
                    }}
                >
                    Ver projeto
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default Card