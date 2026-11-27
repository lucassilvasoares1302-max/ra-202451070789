
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="container header-container">

        <h1>Geração Fotovoltaica de Fazendas em MG</h1>

        <nav aria-label="Menu principal">
          <ul>
            <li><Link to="/#hero">Início</Link></li>
            <li><Link to="/#sobre">Sobre</Link></li>
            <li>
              <Link to="/#geracaoporusina">
                Geração por usina
              </Link>
            </li>
            <li><Link to="/#projetos">Projetos</Link></li>
            <li><Link to="/#contato">Contatos</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
