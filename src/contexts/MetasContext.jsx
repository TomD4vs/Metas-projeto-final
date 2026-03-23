import { createContext, useContext, useState, useEffect } from 'react'

const MetasContext = createContext(null)

export function MetasProvider({ children }) {
    const [metas, setMetas] = useState(() => {
        const stored = localStorage.getItem('board-metas')
        if (!stored) return [
            { id: 1, titulo: 'Certificação AWS', area: 'Carreira', prazo: '30/06/2025', descricao: 'Estudar e passar no exame Solutions Architect Associate.', progresso: 40 },
            { id: 2, titulo: 'Correr 5km sem parar', area: 'Saúde', prazo: '15/04/2026', descricao: 'Treinar 3x por semana até conseguir completar 5km contínuos.', progresso: 65 },
            { id: 3, titulo: 'Reserva de emergência', area: 'Finanças', prazo: '31/12/2025', descricao: 'Juntar 6 meses de despesas fixas na poupança.', progresso: 20 },
            { id: 4, titulo: 'Ligar para a família toda semana', area: 'Relacionamentos', prazo: '31/03/2026', descricao: 'Manter contato semanal com pais e irmãos.', progresso: 80 },
        ]
        try {
            const parsed = JSON.parse(stored)
            return parsed.map(meta => ({
                ...meta,
                prazo: meta.prazo.includes('-') ? meta.prazo.split('-').reverse().join('/') : meta.prazo
            }))
        } catch { return [] }
    })

    useEffect(() => {
        localStorage.setItem('board-metas', JSON.stringify(metas))
    }, [metas])

    const adicionarMeta = (nova) => {
        setMetas(prev => [...prev, { ...nova, id: Date.now(), progresso: 0 }])
    }

    const removerMeta = (id) => {
        setMetas(prev => prev.filter(m => m.id !== id))
    }

    const atualizarProgresso = (id, valor) => {
        setMetas(prev => prev.map(m => m.id === id ? { ...m, progresso: Number(valor) } : m))
    }

    const editarMeta = (id, dados) => {
        setMetas(prev => prev.map(m => m.id === id ? { ...m, ...dados } : m))
    }

    const limparMetas = () => {
        localStorage.removeItem('board-metas')
        setMetas([])
    }

    return (
        <MetasContext.Provider value={{ metas, adicionarMeta, removerMeta, atualizarProgresso, editarMeta, limparMetas }}>
            {children}
        </MetasContext.Provider>
    )
}

export function useMetas() {
    return useContext(MetasContext)
}