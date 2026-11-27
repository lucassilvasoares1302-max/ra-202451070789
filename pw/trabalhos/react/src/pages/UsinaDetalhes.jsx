
import { Link, useParams } from 'react-router-dom';
import { useUsinas } from '../context/UsinasContext';
import EstadoCarregamento from '../components/EstadoCarregamento';
import NaoEncontrado from './NaoEncontrado';

export default function UsinaDetalhes() {
  const { id } = useParams();

  const {
    usinas,
    carregando,
    erro,
    tentarNovamente
  } = useUsinas();

  const usina = usinas.find(item => item.id === id);

  function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  if (carregando || erro) {
    return (
      <main>
        <section>
          <div className="container">
            <EstadoCarregamento
              carregando={carregando}
              erro={erro}
              tentarNovamente={tentarNovamente}
            />
          </div>
        </section>
      </main>
    );
  }

  if (!usina) {
    return <NaoEncontrado />;
  }

  return (
    <main>

      <section id="usina-detalhes">
        <div className="container">

          <h2>{usina.nome}</h2>

          <div className="usina-detalhes-conteudo">

            <div className="usina-detalhes-imagem">
              <img
                src={`${import.meta.env.BASE_URL}imagens/${usina.imagem}`}
                alt={`${usina.nome} localizada em ${usina.cidade}`}
              />
            </div>

            <div className="usina-detalhes-informacoes">

              <h3>Informações da Usina</h3>

              <p>
                <strong>Localização:</strong> {usina.cidade}
              </p>

              <p>
                <strong>Capacidade instalada:</strong>{' '}
                {usina.capacidade.toLocaleString('pt-BR')} kWp
              </p>

              <p>
                <strong>Investimento:</strong>{' '}
                {formatarMoeda(usina.investimento)}
              </p>

              <p>
                <strong>Economia mensal estimada:</strong>{' '}
                {formatarMoeda(usina.economiaMensal)}
              </p>

              <p>
                <strong>Período analisado:</strong>{' '}
                {usina.periodo}
              </p>

            </div>
          </div>
        </div>
      </section>

      <section id="dados-geracao">
        <div className="container">

          <h2>Dados de geração e economia</h2>

          <p>
            Abaixo estão os dados de geração da {usina.nome}
            referentes ao período de {usina.periodo},
            incluindo geração de energia, custo mensal,
            valor gerado e economia total mensal.
          </p>

          <div className="tabela-imagem">
            <img
              src={`${import.meta.env.BASE_URL}imagens/${usina.tabela}`}
              alt={`Tabela de geração, custos e economia da ${usina.nome}`}
              loading="lazy"
            />
          </div>

        </div>
      </section>

      <section id="retorno-investimento">
        <div className="container">

          <h2>Retorno do investimento</h2>

          <p>
            Os dados apresentados na planilha permitem
            acompanhar a relação entre o valor investido
            na {usina.nome} e o valor acumulado já
            recuperado por meio da geração de energia.
          </p>

          <p>
            O acompanhamento do retorno do investimento
            permite observar a evolução da recuperação
            do valor aplicado na implantação da usina.
          </p>

        </div>
      </section>

      <section id="voltar">
        <div className="container">

          <Link to="/" className="botao-voltar">
            ← Voltar para a página principal
          </Link>

        </div>
      </section>

    </main>
  );
}
