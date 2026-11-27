
import { Link } from 'react-router-dom';

export default function UsinaCard({ usina }) {
  return (
    <article className="geracaoporusina-horizontal card">

      <div className="geracaoporusina-info">

        <div className="usina-cabecalho">
          <h3>{usina.nome}</h3>

          <span className="kwp">
            {usina.capacidade} kWp
          </span>

          <span className="cidade">
            {usina.cidade}
          </span>
        </div>

        <div className="usina-imagem">
          <img
            src={`${import.meta.env.BASE_URL}imagens/${usina.imagem}`}
            alt={`${usina.nome} - ${usina.cidade}`}
            loading="lazy"
          />
        </div>

      </div>

      <div className="geracaoporusina-descricao">

        <p>{usina.descricao}</p>

        <p className="saiba-mais">
          Saiba mais sobre dados de geração,
          economia e produção da usina{' '}
          <Link
            to={`/usina/${usina.id}`}
            aria-label={`Saiba mais sobre a ${usina.nome}`}
          >
            aqui
          </Link>.
        </p>

      </div>

    </article>
  );
}
