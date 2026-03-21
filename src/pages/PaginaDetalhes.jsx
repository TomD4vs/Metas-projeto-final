import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useMetas } from '../contexts/MetasContext'
import { AREAS, getAreaConfig, formatarPrazo, calcDiasRestantes } from '../utils/areas'
import ProgressoBar from '../components/ProgressoBar'

function PaginaDetalhes() {
    const { id } = useParams()
    const { metas, removerMeta, editarMeta, atualizarProgresso } = useMetas()
    const navigate = useNavigate()

    const meta = metas.find(m => m.id === Number(id))
    const [editando, setEditando] = useState(false)
    const [form, setForm] = useState({})
    const [erros, setErros] = useState({})

    if (!meta) return (
        <main className="pagina-detalhes">
            <p style={{ color: 'var(--text-muted)' }}>Meta não encontrada.</p>
            <button className="btn-voltar" onClick={() => navigate('/metas')}>← Voltar</button>
        </main>
    )

    const config = getAreaConfig(meta.area)
    const dias = calcDiasRestantes(meta.prazo)

    const handleRemover = () => { removerMeta(meta.id); navigate('/metas') }

    const abrirEdicao = () => {
        const prazoParaInput = meta.prazo ? meta.prazo.split('/').reverse().join('-') : ''
        setForm({ titulo: meta.titulo, area: meta.area, prazo: prazoParaInput, descricao: meta.descricao || '' })
        setErros({})
        setEditando(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        if (erros[name]) setErros(prev => ({ ...prev, [name]: '' }))
    }

    const validar = () => {
        const e = {}
        if (!form.titulo.trim()) e.titulo = 'O título é obrigatório.'
        else if (form.titulo.trim().length < 3) e.titulo = 'Mínimo 3 caracteres.'
        if (!form.prazo) e.prazo = 'Defina um prazo.'
        setErros(e)
        return !Object.keys(e).length
    }

    const handleSalvar = (e) => {
        e.preventDefault()
        if (!validar()) return
        const prazoFormatado = form.prazo ? form.prazo.split('-').reverse().join('/') : ''
        editarMeta(meta.id, {
            titulo: form.titulo.trim(),
            area: form.area,
            prazo: prazoFormatado,
            descricao: form.descricao.trim(),
        })
        setEditando(false)
    }

    return (
        <main className="pagina-detalhes">
            <button className="btn-voltar" onClick={() => navigate(-1)}>← Voltar</button>

            <div className="detalhe-card">
                {!editando ? (
                    <>
                        <div className="detalhe-topo">
                            <span className="meta-area-badge"
                                style={{ backgroundColor: config.cor + '20', color: config.cor }}>
                                {config.emoji} {meta.area}
                            </span>
                            <button className="btn-editar" onClick={abrirEdicao}>Editar</button>
                        </div>

                        <h1>{meta.titulo}</h1>
                        {meta.descricao && <p className="detalhe-desc">{meta.descricao}</p>}

                        <ul className="detalhe-info">
                            <li>
                                <strong>Prazo: </strong>{formatarPrazo(meta.prazo)}
                                {dias < 0 && <span className="badge-vencido"> · vencido</span>}
                                {dias >= 0 && dias <= 7 && <span className="badge-critico"> · {dias}d restantes</span>}
                                {dias > 7 && <span style={{ color: 'var(--text-muted)' }}> · {dias}d restantes</span>}
                            </li>
                        </ul>

                        <div className="detalhe-progresso">
                            <div className="progresso-labels">
                                <span>Progresso</span>
                                <strong style={{ color: config.cor }}>{meta.progresso}%</strong>
                            </div>
                            <ProgressoBar valor={meta.progresso} cor={config.cor} />
                            <input type="range" className="progresso-slider" min="0" max="100"
                                value={meta.progresso}
                                onChange={e => atualizarProgresso(meta.id, e.target.value)} />
                            {meta.progresso === 100 && (
                                <p className="meta-concluida">🏆 Meta concluída! Parabéns!</p>
                            )}
                        </div>

                        <button className="btn-remover" onClick={handleRemover}>Remover meta</button>
                    </>
                ) : (
                    <>
                        <h2>Editar Meta</h2>
                        <form onSubmit={handleSalvar} className="form-nova-meta" noValidate>
                            <div className={`campo-grupo ${erros.titulo ? 'erro' : ''}`}>
                                <label>Título *</label>
                                <input type="text" name="titulo" value={form.titulo}
                                    onChange={handleChange} autoFocus />
                                {erros.titulo && <span className="erro-msg">{erros.titulo}</span>}
                            </div>
                            <div className="form-row">
                                <div className="campo-grupo">
                                    <label>Área</label>
                                    <select name="area" value={form.area} onChange={handleChange}>
                                        {AREAS.map(a => <option key={a}>{a}</option>)}
                                    </select>
                                </div>
                                <div className={`campo-grupo ${erros.prazo ? 'erro' : ''}`}>
                                    <label>Prazo *</label>
                                    <input type="date" name="prazo" value={form.prazo} onChange={handleChange} />
                                    {erros.prazo && <span className="erro-msg">{erros.prazo}</span>}
                                </div>
                            </div>
                            <div className="campo-grupo">
                                <label>Descrição</label>
                                <textarea name="descricao" value={form.descricao}
                                    onChange={handleChange} rows={3} />
                            </div>
                            <div className="form-acoes">
                                <button type="button" className="btn-cancelar"
                                    onClick={() => setEditando(false)}>Cancelar</button>
                                <button type="submit" className="btn-salvar">Salvar alterações</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </main>
    )
}

export default PaginaDetalhes