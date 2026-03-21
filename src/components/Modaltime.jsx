import { useEffect } from 'react'

const TIME = [
    {
        nome: 'Calebe Maia',
        papel: 'Desenvolvedor Front-end',
        github: 'https://github.com/CalebeMaia',
        avatar: 'https://github.com/CalebeMaia.png',
        iniciais: 'TD',
    },

    {
        nome: 'TomD4vs',
        papel: 'Desenvolvedor Full Stack',
        github: 'https://github.com/TomD4vs',
        avatar: 'https://github.com/TomD4vs.png',
        iniciais: 'TD',
    },

    {
        nome: 'Rafaeldevstudio',
        papel: 'Desenvolvedor Front-end',
        github: 'https://github.com/rafaeldevstudio',
        avatar: 'https://github.com/rafaeldevstudio.png',
        iniciais: 'TD',
    },

    {
        nome: 'Lucas Santos',
        papel: 'Desenvolvedor Front-end',
        github: ' https://github.com/lucas-lsz',
        avatar: ' https://github.com/lucas-lsz.png',
        iniciais: 'TD',
    },
]

function ModalTime({ isOpen, onFechar }) {
    useEffect(() => {
        if (!isOpen) return
        const handleKey = (e) => { if (e.key === 'Escape') onFechar() }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [isOpen, onFechar])

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onFechar}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Time de Desenvolvimento</h2>
                    <button className="modal-close" onClick={onFechar}>✕</button>
                </div>

                <div className="time-lista">
                    {TIME.map((dev, index) => (
                        <div key={index} className="dev-card">
                            <div className="dev-avatar-wrap">
                                <img
                                    src={dev.avatar}
                                    alt={dev.nome}
                                    className="dev-avatar"
                                    onError={e => {
                                        e.target.style.display = 'none'
                                        e.target.nextSibling.style.display = 'flex'
                                    }}
                                />
                                <div className="dev-avatar-fallback" style={{ display: 'none' }}>
                                    {dev.iniciais}
                                </div>
                            </div>

                            <div className="dev-info">
                                <strong className="dev-nome">{dev.nome}</strong>
                                <span className="dev-papel">{dev.papel}</span>
                            </div>

                            <a
                                href={dev.github}
                                target="_blank"
                                rel="noreferrer"
                                className="dev-github"
                                title="Ver GitHub"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ModalTime