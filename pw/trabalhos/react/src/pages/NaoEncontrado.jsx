
import { Link } from 'react-router-dom';

export default function NaoEncontrado() {
  return (
    <main>
      <section>
        <div className="container">

          <h2>Página não encontrada</h2>

          <p>
            A página que você está procurando não existe
            ou não está disponível.
          </p>

          <Link to="/" className="botao-voltar">
            ← Voltar para a página principal
          </Link>

        </div>
      </section>
    </main>
  );
}
