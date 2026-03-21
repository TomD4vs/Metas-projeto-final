import { useState } from 'react'
import ModalTime from './Modaltime'

function Footer() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <footer>
                <small>
                    © {new Date().getFullYear()} - Projeto Metas
                    {' · '}
                    <button className="footer-btn-time" onClick={() => setOpen(true)}>
                        Ver time
                    </button>
                </small>
            </footer>
            <ModalTime isOpen={open} onFechar={() => setOpen(false)} />
        </>
    )
}

export default Footer