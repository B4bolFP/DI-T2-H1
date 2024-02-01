import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Mario Lopez Llamas - Hito
      </Link>
      <ul>
        <LinkPersonalizado pagina="/">Inicio</LinkPersonalizado>
        <LinkPersonalizado pagina="/products">Productos</LinkPersonalizado>
        <LinkPersonalizado pagina="/about">Sobre mi</LinkPersonalizado>
        <LinkPersonalizado pagina="/contact">Contacto</LinkPersonalizado>
        <LinkPersonalizado pagina="/login">Inicia sesion</LinkPersonalizado>
      </ul>
    </nav>
  )
}

function LinkPersonalizado({ pagina, children }) {
  return (
    <li>
      <Link to={pagina}>
        {children}
      </Link>
    </li>
  )
}
