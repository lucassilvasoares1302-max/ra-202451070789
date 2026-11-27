
import { useState } from 'react';
import { useUsinas } from '../context/UsinasContext';
import UsinaCard from '../components/UsinaCard';
import ProjetoCard from '../components/ProjetoCard';
import ContatoForm from '../components/ContatoForm';
import EstadoCarregamento from '../components/EstadoCarregamento';

export default function Home() {

  const {
    usinas,
    carregando,
    erro,
    tentarNovamente
  } = useUsinas();

  const [busca, setBusca] = useState('');

  const usinasFiltradas = usinas.filter((usina) => {

    const termo = busca.toLowerCase().trim();

    return (
      usina.nome.toLowerCase().includes(termo) ||
      usina.cidade.toLowerCase().includes(termo)
    );

  });

  return (

    <main>

      <section id="hero">

        <div className="container hero-container">

          <div className="hero-imagem">

            <img
              src={`${import.meta.env.BASE_URL}imagens/ftv.jpg`}
              alt="Geração de energia fotovoltaica"
            />

          </div>

          <div className="hero-text">

            <h2>Energia limpa, acessível e renovável</h2>

            <p>
              Três grandes distribuidoras de energia em MG se
              juntaram em uma parceria para gerar uma grande
              oferta de energia para famílias em necessidade.
              Além disso, nos entornos das instalações estão
              sendo realizados projetos relacionados à
              fotovoltaica como incentivo aos locais para
              desenvolvimento e cuidado das usinas.
            </p>

            <p>
              Acompanhe nesta coletânea de informações os dados
              das oito usinas fotovoltaicas, a geração de energia,
              a economia financeira e os impactos ambientais
              e sociais gerados.
            </p>

          </div>

          <div className="sobre-resumo" id="sobre">

            <h2>Sobre o Projeto</h2>

            <p>
              Em junho de 2025 foram instaladas três grandes
              fazendas fotovoltaicas na união das empresas
              X, Y e Z. Com a expansão do projeto, atualmente
              são apresentadas oito usinas, totalizando
              17.000 kWp de capacidade instalada.
            </p>

            <p>
              A previsão de economia mensal das oito usinas
              é de R$ 680.000,00, considerando a produção
              de energia fotovoltaica.
            </p>

            <p>
              O investimento total na implementação das oito
              usinas corresponde a R$ 20.450.000,00, incluindo
              equipamentos e documentação.
            </p>

          </div>

          <div className="hero-imagem-secundaria">

            <img
              src={`${import.meta.env.BASE_URL}imagens/esg7.png`}
              alt="ODS 7 - Energia limpa e acessível"
            />

          </div>

        </div>

      </section>

      <section id="geracaoporusina">

        <div className="container">

          <h2>
            Geração por usina - Energia, custos e economia
          </h2>

          <p className="subtitulo-secao">
            Conheça as oito usinas fotovoltaicas e acompanhe
            suas informações de geração e economia.
          </p>

          <div className="filtro-usinas">

            <label htmlFor="busca-usinas">
              Buscar usinas
            </label>

            <input
              id="busca-usinas"
              type="search"
              placeholder="Digite o nome ou a cidade da usina"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
            />

          </div>

          <EstadoCarregamento
            carregando={carregando}
            erro={erro}
            vazio={usinasFiltradas.length === 0}
            tentarNovamente={tentarNovamente}
          >

            <p className="subtitulo-secao" aria-live="polite">
              {usinasFiltradas.length} de {usinas.length}
              {' '}usinas encontradas.
            </p>

            {usinasFiltradas.map((usina) => (

              <UsinaCard
                key={usina.id}
                usina={usina}
              />

            ))}

          </EstadoCarregamento>

          <p className="subtitulo-secao">
            Os dados apresentados são fictícios e possuem
            finalidade acadêmica. As imagens e tabelas
            de geração são ilustrativas.
          </p>

        </div>

      </section>

      <section id="projetos">

        <div className="container">

          <h2>Projetos em paralelo às usinas</h2>

          <div className="grid-projetos">

            <ProjetoCard titulo="Projeto Capacitação">

              <p>
                Nos entornos das usinas, estão sendo realizados
                cursos gratuitos de capacitação técnica para
                instalar, dimensionar e manipular instalações
                elétricas e fotovoltaicas.
              </p>

              <p>
                Tem interesse em se tornar um profissional mais
                instruído e técnico? Entre em contato conosco
                na aba de contatos e faça sua inscrição!
              </p>

            </ProjetoCard>

            <ProjetoCard titulo="Projeto Feira de Empregabilidade">

              <p>
                Uma vez ao mês vêm sendo organizadas feiras
                de empregabilidade com empresas no ramo de
                energia para promover maior empregabilidade
                nas regiões mais necessitadas.
              </p>

              <p>
                As empresas que prestam manutenção nas usinas
                também fazem parte dessa feira.
              </p>

            </ProjetoCard>

            <ProjetoCard titulo="Incentivo à Fotovoltaica na Região">

              <p>
                O projeto também propõe iniciativas de incentivo
                financeiro para a aquisição de equipamentos
                destinados a sistemas fotovoltaicos,
                incentivando o uso de energia limpa e mais barata.
              </p>

            </ProjetoCard>

          </div>

        </div>

      </section>

      <section id="contato">

        <div className="container">

          <h2>Contato</h2>

          <ContatoForm />

        </div>

      </section>

    </main>

  );

}
