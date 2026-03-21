export const AREA_CONFIG = {
    'Carreira': { cor: '#6366f1', emoji: '💼' },
    'Saúde': { cor: '#ec4899', emoji: '🏃' },
    'Finanças': { cor: '#22c55e', emoji: '💰' },
    'Relacionamentos': { cor: '#f59e0b', emoji: '🤝' },
}

export const AREAS = Object.keys(AREA_CONFIG)

export const getAreaConfig = (area) =>
    AREA_CONFIG[area] || { cor: '#64748b', emoji: '🎯' }

const prazoParaDate = (prazo) => {
    const [dia, mes, ano] = prazo.split('/')
    return new Date(`${ano}-${mes}-${dia}T00:00:00`)
}

export const formatarPrazo = (prazo) => {
    if (!prazo) return ''
    if (prazo.includes('/')) return prazo
    const [ano, mes, dia] = prazo.split('-')
    return `${dia}/${mes}/${ano}`
}

export const calcDiasRestantes = (prazo) =>
    Math.ceil((prazoParaDate(prazo) - new Date()) / (1000 * 60 * 60 * 24))