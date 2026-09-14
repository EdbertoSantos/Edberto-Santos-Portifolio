import { useEffect } from 'react'
import type { Projeto } from '../Card/Card'
import './Modal.css'

interface ModalProps {
    projeto: Projeto
    onFechar: () => void
}

function Modal({ projeto, onFechar }: ModalProps) {
    useEffect(() => {
        const aoApertarEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onFechar()
        }
        document.addEventListener('keydown', aoApertarEsc)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', aoApertarEsc)
            document.body.style.overflow = ''
        }
    }, [onFechar])

    return (
        <div className="modal__overlay" onClick={onFechar}>
            <div className="modal__conteudo" onClick={(e) => e.stopPropagation()}>
                <button className="modal__fechar" onClick={onFechar} aria-label="Fechar modal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <span className="modal__tag">{projeto.tag}</span>
                <h2 className="modal__titulo">{projeto.modalConteudo.tituloCompleto}</h2>
                <p className="modal__descricao">{projeto.modalConteudo.descricaoCompleta}</p>

                <div className="modal__tecnologias">
                    {projeto.modalConteudo.tecnologias.map((tecnologia) => (
                        <span key={tecnologia} className="modal__tecnologia-item">
                            {tecnologia}
                        </span>
                    ))}
                </div>

                <div className="modal__galeria">
                    {projeto.modalConteudo.imagens.map((imagem, indice) => (
                        <img key={indice} src={imagem} alt={`${projeto.nome} - imagem ${indice + 1}`} />
                    ))}
                </div>

                {projeto.linkProjeto && (
                    <a className="modal__link" href={projeto.linkProjeto} target="_blank" rel="noreferrer">
                        Ver projeto no ar
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    )
}

export default Modal