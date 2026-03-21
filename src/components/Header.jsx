import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <span>🎯</span>
                Board de Metas
            </div>
            <nav className="header-nav">
                <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' ativo' : '')}>
                    Dashboard
                </NavLink>
                <NavLink to="/metas" className={({ isActive }) => 'nav-link' + (isActive ? ' ativo' : '')}>
                    Metas
                </NavLink>
            </nav>
        </header>
    )
}

export default Header