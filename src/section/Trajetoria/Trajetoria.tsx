import ExperienciaCard from '../../components/ExperienciaCard/ExperienciaCard'
import type { Experiencia } from '../../components/ExperienciaCard/ExperienciaCard'
import './Trajetoria.css'

const experiencias: Experiencia[] = [
    {
        id: 1,
        periodo: 'MAI 2025 — MAR 2026',
        modalidade: 'Presencial',
        cargo: 'Auxiliar administrativo Jr.',
        empresa: 'NE Soluções',
        bullets: [
            'Automatizei processos de triagem de e-mails e controle administrativo com Python e VBA, reduzindo retrabalho manual.',
            'Gerenciei comunicação com sistema de cadastro da Polícia Federal, garantindo a conformidade dos registros.',
            'Realizei suporte a sistemas de clientes e gestão logística de materiais.',
        ],
    },
    {
        id: 2,
        periodo: 'ABR 2023 — OUT 2023',
        modalidade: 'Híbrido',
        cargo: 'Estagiário Customer Care',
        empresa: 'Effetive Sistemas',
        bullets: [
            'Atendi e realizei triagem de chamados por e-mail e telefone, priorizando por urgência e impacto.',
            'Participei de reuniões com clientes nacionais e internacionais como interface com o time de desenvolvimento.',
            'Documentei incidentes e soluções recorrentes para base de conhecimento interna.',
        ],
    },
]

const formacoes = [
    {
        id: 1,
        curso: 'Licenciatura em Computação',
        instituicao: 'UFRPE — Recife · 2024 — 2029 (em andamento)',
    },
    {
        id: 2,
        curso: 'Análise e Desenvolvimento de Sistemas',
        instituicao: 'UNINASSAU — Recife · 2023',
    },
]

const certificacoes = [
    {
        id: 1,
        curso: 'Curso tal',
        instituicao: '00h — Empresa tal · 2024',
    },
    {
        id: 2,
        curso: 'Curso tal',
        instituicao: '00h — Empresa tal · 2024',
    },
]

const hardSkills = ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Git', 'VBA']

function Trajetoria() {
    return (
        <section className="trajetoria">
            <div className="trajetoria__content">
                <h1 className="trajetoria__title">
                    <span className="trajetoria__title-destaque">Trajetória</span> profissional
                </h1>

                <div className="trajetoria__timeline">
                    <span className="trajetoria__linha" />

                    {experiencias.map((experiencia, indice) => (
                        <ExperienciaCard
                            key={experiencia.id}
                            experiencia={experiencia}
                            lado={indice % 2 === 0 ? 'esquerda' : 'direita'}
                        />
                    ))}
                </div>

                <div className="trajetoria__grid-info">
                    <div className="trajetoria__bloco">
                        <h4 className="trajetoria__bloco-titulo">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 10L12 5 2 10l10 5 10-5Z" strokeLinejoin="round" />
                                <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Formação
                        </h4>
                        {formacoes.map((item) => (
                            <div key={item.id} className="trajetoria__bloco-item">
                                <p className="trajetoria__bloco-item-titulo">{item.curso}</p>
                                <p className="trajetoria__bloco-item-sub">{item.instituicao}</p>
                            </div>
                        ))}
                    </div>

                    <div className="trajetoria__bloco">
                        <h4 className="trajetoria__bloco-titulo">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="8" r="6" />
                                <path d="M9 13.5 7 22l5-3 5 3-2-8.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Certificações
                        </h4>
                        {certificacoes.map((item) => (
                            <div key={item.id} className="trajetoria__bloco-item">
                                <p className="trajetoria__bloco-item-titulo">{item.curso}</p>
                                <p className="trajetoria__bloco-item-sub">{item.instituicao}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="trajetoria__skills">
                    <h4 className="trajetoria__bloco-titulo">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M8 6 2 12l6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Hard Skills
                    </h4>
                    <div className="trajetoria__skills-lista">
                        {hardSkills.map((skill) => (
                            <span key={skill} className="trajetoria__skill-pill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="trajetoria__acoes">
                    <a className="trajetoria__botao trajetoria__botao--primario" href="/curriculo.pdf" download>
                        Baixar currículo em Pdf
                    </a>
                    <a className="trajetoria__botao trajetoria__botao--secundario" href="/curriculo.docx" target="_blank" rel="noreferrer">
                        Ver currículo em Docx
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Trajetoria