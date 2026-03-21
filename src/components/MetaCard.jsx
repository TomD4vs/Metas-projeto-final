import { Link } from 'react-router-dom'
import { useMetas } from '../contexts/MetasContext'
import { getAreaConfig, formatarPrazo, calcDiasRestantes } from '../utils/areas'

function MetaCard({ meta }) {
    const { removerMeta } = useMetas()
    const config = getAreaConfig(meta.area)
    const dias = calcDiasRestantes(meta.prazo)

    return (
        <article className="meta-card" style={{ borderLeftColor: config.cor }}>
            <div className="meta-card-header">
                <h3 className="meta-titulo">{meta.titulo}</h3>
                <button className="btn-remover-meta" onClick={() => removerMeta(meta.id)} title="Remover">✕</button>
            </div>

            <div className="meta-card-info">
                <span className="meta-area-badge" style={{ backgroundColor: config.cor + '20', color: config.cor }}>
                    {config.emoji} {meta.area}
                </span>
                <span className={`meta-prazo ${dias >= 0 && dias <= 7 ? 'critico' : ''} ${dias < 0 ? 'vencido' : ''}`}>
                    {formatarPrazo(meta.prazo)}
                    {dias < 0 && ' · vencido'}
                    {dias >= 0 && dias <= 7 && ` · ${dias}d`}
                </span>
            </div>

            <p className={`meta-descricao${meta.descricao ? '' : ' vazia'}`}>
                {meta.descricao || 'Sem descrição.'}
            </p>

            <Link to={`/meta/${meta.id}`} className="btn-detalhes-meta">Ver detalhes →</Link>
        </article>
    )
}

export default MetaCard