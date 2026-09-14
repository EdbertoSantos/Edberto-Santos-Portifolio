import { useState } from 'react'
import Carrossel from '../../components/Carrossel/Carrossel'
import Modal from '../../components/Modal/Modal'
import type { Projeto } from '../../components/Card/Card'
import './Projetos.css'

const tagsDisponiveis = ['Todos', 'Full Stack', 'Front-end', 'QA', 'Back-end']

const projetos: Projeto[] = [
  {
    id: 1,
    tag: 'Full Stack',
    nome: 'Sherlock',
    descricao: 'Plataforma unificada de vendas e atendimento',
    imagem: 'https://placehold.co/760x520/1a1428/6b6280?text=Sherlock',
    linkProjeto: 'https://exemplo.com/sherlock',
    modalConteudo: {
      tituloCompleto: 'Sherlock — CRM omnichannel',
      descricaoCompleta:
        'Plataforma única para vendas, atendimento ao cliente e marketing dentro de chats e mensageiros, unificando conversas de múltiplos canais em um só painel para times comerciais.',
      tecnologias: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
      imagens: ['https://placehold.co/1200x700/1a1428/6b6280?text=Dashboard'],
    },
  },
  {
    id: 2,
    tag: 'Back-end',
    nome: 'Orbit API',
    descricao: 'Serviço de filas para processamento assíncrono',
    imagem: 'https://placehold.co/760x520/1a1428/6b6280?text=Orbit+API',
    modalConteudo: {
      tituloCompleto: 'Orbit — motor de filas distribuído',
      descricaoCompleta:
        'API responsável por orquestrar jobs assíncronos com retry automático, priorização de filas e observabilidade em tempo real via métricas expostas em Prometheus.',
      tecnologias: ['Go', 'RabbitMQ', 'Redis', 'Docker'],
      imagens: ['https://placehold.co/1200x700/1a1428/6b6280?text=Arquitetura'],
    },
  },
  {
    id: 3,
    tag: 'Front-end',
    nome: 'Painel Lumen',
    descricao: 'Dashboard de métricas para squads de produto',
    imagem: 'https://placehold.co/760x520/1a1428/6b6280?text=Lumen',
    linkProjeto: 'https://exemplo.com/lumen',
    modalConteudo: {
      tituloCompleto: 'Lumen — dashboard de produto',
      descricaoCompleta:
        'Interface responsiva com gráficos interativos, filtros combinados e exportação de relatórios, construída priorizando performance em bases de dados grandes.',
      tecnologias: ['React', 'TypeScript', 'Recharts', 'Vite'],
      imagens: ['https://placehold.co/1200x700/1a1428/6b6280?text=Graficos'],
    },
  },
  {
    id: 4,
    tag: 'QA',
    nome: 'Suite Vigia',
    descricao: 'Automação de testes end-to-end para e-commerce',
    imagem: 'https://placehold.co/760x520/1a1428/6b6280?text=Vigia',
    modalConteudo: {
      tituloCompleto: 'Vigia — automação E2E',
      descricaoCompleta:
        'Suíte de testes automatizados cobrindo os fluxos críticos de checkout, com execução paralela em pipeline de CI e relatórios visuais de regressão.',
      tecnologias: ['Cypress', 'GitHub Actions', 'Node.js'],
      imagens: ['https://placehold.co/1200x700/1a1428/6b6280?text=Relatorio'],
    },
  },
  {
    id: 5,
    tag: 'Full Stack',
    nome: 'Fluxo',
    descricao: 'Gestão de tarefas colaborativa em tempo real',
    imagem: 'https://placehold.co/760x520/1a1428/6b6280?text=Fluxo',
    linkProjeto: 'https://exemplo.com/fluxo',
    modalConteudo: {
      tituloCompleto: 'Fluxo — quadro colaborativo',
      descricaoCompleta:
        'Aplicação estilo kanban com sincronização em tempo real entre usuários, histórico de alterações e integração com calendário para prazos de entrega.',
      tecnologias: ['React', 'Express', 'MongoDB', 'Socket.io'],
      imagens: ['https://placehold.co/1200x700/1a1428/6b6280?text=Kanban'],
    },
  },
  {
    id: 6,
    tag: 'Back-end',
    nome: 'Cofre',
    descricao: 'Serviço de autenticação e gestão de permissões',
    imagem: 'https://placehold.co/760x520/1a1428/6b6280?text=Cofre',
    modalConteudo: {
      tituloCompleto: 'Cofre — auth e permissões',
      descricaoCompleta:
        'Microsserviço central de autenticação com suporte a OAuth2, controle de permissões granular por papel e auditoria completa de acessos.',
      tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT'],
      imagens: ['https://placehold.co/1200x700/1a1428/6b6280?text=Permissoes'],
    },
  },
]

function Projetos() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos')
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null)

  const projetosFiltrados =
    filtroAtivo === 'Todos'
      ? projetos
      : projetos.filter((projeto) => projeto.tag === filtroAtivo)

  return (
    <section className="projetos">
      <div className="projetos__content">
        <h1 className="projetos__title">
          Trabalhos <span className="projetos__title-destaque">selecionados</span>
        </h1>

        <ul className="projetos__filters">
          {tagsDisponiveis.map((tag) => (
            <li key={tag}>
              <button
                className={
                  filtroAtivo === tag
                    ? 'projetos__filtro-botao projetos__filtro-botao--ativo'
                    : 'projetos__filtro-botao'
                }
                onClick={() => setFiltroAtivo(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>

        <Carrossel projetos={projetosFiltrados} onCardClick={setProjetoSelecionado} />
      </div>

      {projetoSelecionado && (
        <Modal projeto={projetoSelecionado} onFechar={() => setProjetoSelecionado(null)} />
      )}
    </section>
  )
}

export default Projetos