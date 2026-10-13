import ExperienciaCard from '../../components/ExperienciaCard/ExperienciaCard'
import type { Experiencia } from '../../components/ExperienciaCard/ExperienciaCard'
import './Trajetoria.css'

const experiencias: Experiencia[] = [
    {
        id: 1,
        periodo: 'SET 2026 — ATUALMENTE',
        modalidade: 'Híbrido',
        cargo: 'Pesquisador em Iniciação Científica',
        empresa: 'Universidade Federal Rural de Pernambuco (UFRPE) LABORATÓRIO DE PESQUISA Performace Evaluation and Data Analysis Lab (PEDAL)',
        bullets: [
            'Desenvolvo modelos de visão computacional em Python para detecção automática de ocorrências de segurança pública a partir de imagens capturadas por drones.',
            'Integro técnicas de inteligência artificial em ambientes de computação de borda (edge computing), no contexto do projeto de IoT e Computação em Nuvem para Monitoramento de Segurança.',
            'Pesquiso e implemento arquiteturas de deep learning aplicadas ao reconhecimento de padrões em imagens no plano de trabalho "Detecção automática de ocorrências de segurança pública em imagens".',
        ],
    },
    {
        id: 2,
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
        id: 3,
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
        instituicao: 'UFRPE — Recife · 2025 — em andamento (previsão de conclusão em 2029)',
    },
    {
        id: 2,
        curso: 'Análise e Desenvolvimento de Sistemas',
        instituicao: 'UNINASSAU — Recife · 2021 — 2023',
    },
]

const certificacoes = [
    {
        id: 1,
        curso: 'AWS Cloud Practitioner',
        instituicao: 'Start+ Rede Cidadã · Mar-Jul 2026',
    },
    {
        id: 2,
        curso: 'Red Hat Application Development I: Programming in Java EE',
        instituicao: 'Red Hat · Nov 2025 - Fev 2026',
    },
    {
        id: 3,
        curso: 'Engenharia de Qualidade de Software [FAST 2025]',
        instituicao: 'CESAR School · Set-Dez 2025',
    },
    {
        id: 4,
        curso: 'Trilha de Desenvolvimento Java',
        instituicao: 'Capgemini · Em andamento',
    },
    {
        id: 5,
        curso: 'Cibersegurança',
        instituicao: 'Start+ Rede Cidadã · Set-Dez 2024',
    },
    {
        id: 6,
        curso: 'Inteligência Artificial',
        instituicao: 'Start+ Rede Cidadã · Mai-Set 2024',
    },
    {
        id: 7,
        curso: 'Trailmix Salesforce (Qualifica Recife)',
        instituicao: 'Salesforce Trailhead · Em andamento',
    },
]

const hardSkills = [
    'Java',
    'Spring Boot',
    'Python',
    'FastAPI',
    'React',
    'APIs REST',
    'JWT',
    'AWS (EC2, Lambda, S3, CloudWatch)',
    'PostgreSQL',
    'MySQL',
    'Docker',
    'Git',
    'JUnit',
    'VBA',
    'Visão Computacional',
]
function Trajetoria() {
    return (
        <section className="trajetoria">
            <div className="trajetoria__content">
                <h1 className="trajetoria__title">Trajetória profissional </h1>

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
                        {"</>"} Hard Skills
                    </h4>
                    <div className="trajetoria__skills-lista">
                        {hardSkills.map((skill) => (
                            <span key={skill} className="trajetoria__skill-pill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* TODO: Add arquive to download */}
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