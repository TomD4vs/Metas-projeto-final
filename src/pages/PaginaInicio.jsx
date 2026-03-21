import { Link } from 'react-router-dom'
import { useMetas } from '../contexts/MetasContext'
import { AREA_CONFIG, calcDiasRestantes } from '../utils/areas'

function PaginaInicio() {
  const { metas } = useMetas()

  const total      = metas.length
  const concluidas = metas.filter(m => m.progresso === 100).length
  const mediaGeral = total > 0
    ? Math.round(metas.reduce((acc, m) => acc + m.progresso, 0) / total)
    : 0
  const prazoCritico = metas.filter(m => {
    const d = calcDiasRestantes(m.prazo)
    return d >= 0 && d <= 7 && m.progresso < 100
  }).length

  const porArea = Object.entries(AREA_CONFIG).map(([area, config]) => {
    const grupo = metas.filter(m => m.area === area)
    const media = grupo.length > 0
      ? Math.round(grupo.reduce((a, m) => a + m.progresso, 0) / grupo.length)
      : null
    return { area, config, media, total: grupo.length }
  })

  return (
    <main className="pagina-inicio">
      <div className="dashboard-hero">
        <h1>Board de Metas</h1>
        <p>Acompanhe suas metas em todas as áreas da vida.</p>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <strong>{total}</strong>
          <span>cadastradas</span>
        </div>
        <div className="stat-item">
          <strong>{mediaGeral}%</strong>
          <span>progresso médio</span>
        </div>
        <div className="stat-item">
          <strong>{concluidas}</strong>
          <span>concluídas</span>
        </div>
        {prazoCritico > 0 && (
          <div className="stat-item alerta">
            <strong>{prazoCritico}</strong>
            <span>prazo crítico</span>
          </div>
        )}
      </div>

      <div className="areas-lista">
        <h2>Progresso por área</h2>
        {porArea.map(({ area, config, media, total: tot }) => (
          <div key={area} className="area-row">
            <div className="area-row-left">
              <span className="area-row-emoji">{config.emoji}</span>
              <span className="area-row-nome">{area}</span>
            </div>
            <span className="area-row-count">{tot} meta{tot !== 1 ? 's' : ''}</span>
            <div className="area-row-bar">
              {media !== null && (
                <div className="area-row-bar-fill"
                  style={{ width: `${media}%`, backgroundColor: config.cor }} />
              )}
            </div>
            <span className="area-row-pct" style={{ color: media !== null ? config.cor : 'var(--text-dim)' }}>
              {media !== null ? `${media}%` : '—'}
            </span>
          </div>
        ))}
      </div>

      <Link to="/metas" className="btn-primario">Ver todas as metas →</Link>
    </main>
  )
}

export default PaginaInicio