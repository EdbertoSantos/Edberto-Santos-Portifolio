import './ExperienciaCard.css'

export interface Experiencia {
    id: number
    periodo: string
    modalidade: string
    cargo: string
    empresa: string
    bullets: string[]
}

interface ExperienciaCardProps {
    experiencia: Experiencia
    lado: 'esquerda' | 'direita'
}

function ExperienciaCard({ experiencia, lado }: ExperienciaCardProps) {
    return (
        <div className={`experiencia-linha experiencia-linha--${lado}`}>
            <div className="experiencia-card">
                <div className="experiencia-card__topo">
                    <span className="experiencia-card__periodo">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                        </svg>
                        {experiencia.periodo}
                    </span>
                    <span className="experiencia-card__modalidade">{experiencia.modalidade}</span>
                </div>

                <h3 className="experiencia-card__cargo">{experiencia.cargo}</h3>
                <p className="experiencia-card__empresa">{experiencia.empresa}</p>

                <ul className="experiencia-card__bullets">
                    {experiencia.bullets.map((bullet, indice) => (
                        <li key={indice}>{bullet}</li>
                    ))}
                </ul>
            </div>

            <span className="experiencia-linha__bolinha" />
        </div>
    )
}

export default ExperienciaCard