import { useRef, useState, useEffect } from 'react'
import Card from '../Card/Card'
import type { Projeto } from '../Card/Card'
import './Carrossel.css'

interface CarrosselProps {
    projetos: Projeto[]
    onCardClick: (projeto: Projeto) => void
}

function Carrossel({ projetos, onCardClick }: CarrosselProps) {
    const trackRef = useRef<HTMLDivElement>(null)
    const [podeVoltar, setPodeVoltar] = useState(false)
    const [podeAvancar, setPodeAvancar] = useState(true)

    const atualizarEstadoSetas = () => {
        const track = trackRef.current
        if (!track) return

        setPodeVoltar(track.scrollLeft > 4)
        setPodeAvancar(
            track.scrollLeft + track.clientWidth < track.scrollWidth - 4
        )
    }

    useEffect(() => {
        atualizarEstadoSetas()
    }, [projetos])

    const rolar = (direcao: 1 | -1) => {
        const track = trackRef.current
        if (!track) return

        const primeiroCard = track.querySelector<HTMLElement>('.card')
        const largura = primeiroCard ? primeiroCard.offsetWidth + 24 : 320

        track.scrollBy({ left: direcao * largura, behavior: 'smooth' })
    }

    return (
        <div className="carrossel">
            <div
                className="carrossel__track"
                ref={trackRef}
                onScroll={atualizarEstadoSetas}
            >
                {projetos.map((projeto) => (
                    <Card key={projeto.id} projeto={projeto} onClick={onCardClick} />
                ))}
            </div>

            <div className="carrossel__controles">
                <button
                    className="carrossel__seta"
                    onClick={() => rolar(-1)}
                    disabled={!podeVoltar}
                    aria-label="Projeto anterior"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    className="carrossel__seta"
                    onClick={() => rolar(1)}
                    disabled={!podeAvancar}
                    aria-label="Próximo projeto"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Carrossel