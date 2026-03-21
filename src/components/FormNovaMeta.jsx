import { useState } from 'react'
import { useMetas } from '../contexts/MetasContext'
import { AREAS } from '../utils/Areas'

function FormNovaMeta({ onFechar }) {
    const { adicionarMeta } = useMetas()
    const [form, setForm] = useState({ titulo: '', area: 'Carreira', prazo: '', descricao: '' })
    const [erros, setErros] = useState({})

    const validar = () => {
        const e = {}
        if (!form.titulo.trim()) e.titulo = 'O título é obrigatório.'
        else if (form.titulo.trim().length < 3) e.titulo = 'Mínimo 3 caracteres.'
        if (!form.prazo) e.prazo = 'Defina um prazo.'
        setErros(e)
        return !Object.keys(e).length
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        if (erros[name]) setErros(prev => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validar()) return
        const prazoFormatado = form.prazo ? form.prazo.split('-').reverse().join('/') : ''
        adicionarMeta({ ...form, prazo: prazoFormatado })
        onFechar?.()
    }

    return (
        <form onSubmit={handleSubmit} className="form-nova-meta" noValidate>
            <div className={`campo-grupo ${erros.titulo ? 'erro' : ''}`}>
                <label>Título *</label>
                <input type="text" name="titulo" value={form.titulo} onChange={handleChange}
                    placeholder="Ex: Certificação Cloud" autoFocus />
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
                <label>Descrição <span className="opcional">(opcional)</span></label>
                <textarea name="descricao" value={form.descricao} onChange={handleChange}
                    placeholder="Detalhe seu plano de ação..." rows={3} />
            </div>

            <div className="form-acoes">
                {onFechar && <button type="button" className="btn-cancelar" onClick={onFechar}>Cancelar</button>}
                <button type="submit" className="btn-salvar">Adicionar Meta</button>
            </div>
        </form>
    )
}

export default FormNovaMeta