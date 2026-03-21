import { useState } from 'react'
import { useMetas } from '../contexts/MetasContext'
import MetaCard from '../components/MetaCard'
import FormNovaMeta from '../components/FormNovaMeta'
import { calcDiasRestantes } from '../utils/areas'

const AREAS = ['Todas', 'Carreira', 'Saúde', 'Finanças', 'Relacionamentos']

function PaginaMetas() {
    const { metas, limparMetas } = useMetas()
    const [filtroArea, setFiltroArea] = useState('Todas')
    const [filtroPrazo, setFiltroPrazo] = useState(false)
    const [mostrarForm, setMostrarForm] = useState(false)

    const hoje = new Date()

    const metasFiltradas = metas
        .filter(m => filtroArea === 'Todas' || m.area === filtroArea)
        .filter(m => {
            if (!filtroPrazo) return true
            const dias = calcDiasRestantes(m.prazo)
            return dias >= 0 && dias <= 7
        })

    return (
        <main className="pagina-metas">
            <div className="metas-topo">
                <h1>Minhas Metas</h1>
                <div className="metas-topo-acoes">
                    <button className="btn-limpar" onClick={limparMetas}>Limpar Metas</button>
                    <button className="btn-nova-meta" onClick={() => setMostrarForm(v => !v)}>
                        {mostrarForm ? '✕ Fechar' : '+ Nova Meta'}
                    </button>
                </div>
            </div>

            {mostrarForm && (
                <div className="form-wrapper">
                    <FormNovaMeta onFechar={() => setMostrarForm(false)} />
                </div>
            )}

            <div className="filtros">
                <div className="filtros-area">
                    {AREAS.map(a => (
                        <button
                            key={a}
                            className={'filtro-btn' + (filtroArea === a ? ' ativo' : '')}
                            onClick={() => setFiltroArea(a)}
                        >
                            {a}
                        </button>
                    ))}
                </div>
                <button
                    className={'filtro-prazo' + (filtroPrazo ? ' ativo' : '')}
                    onClick={() => setFiltroPrazo(v => !v)}
                >
                    🔥 Prazo próximo (7d)
                </button>
            </div>

            {metasFiltradas.length === 0 ? (
                <p className="metas-vazio">
                    {filtroPrazo
                        ? 'Nenhuma meta com prazo nos próximos 7 dias.'
                        : 'Nenhuma meta cadastrada para este filtro.'}
                </p>
            ) : (
                <div className="metas-grid">
                    {metasFiltradas.map(meta => (
                        <MetaCard key={meta.id} meta={meta} />
                    ))}
                </div>
            )}
        </main>
    )
}

export default PaginaMetas