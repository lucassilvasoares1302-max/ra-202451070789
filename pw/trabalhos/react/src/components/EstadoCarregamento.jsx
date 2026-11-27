
export default function EstadoCarregamento({
  carregando,
  erro,
  vazio,
  tentarNovamente,
  children
}) {
  if (carregando) {
    return (
      <p role="status">
        Carregando dados das usinas...
      </p>
    );
  }

  if (erro) {
    return (
      <div role="alert">
        <p>Erro: {erro}</p>

        <button
          type="button"
          onClick={tentarNovamente}
          className="botao-voltar"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  if (vazio) {
    return (
      <p role="status">
        Nenhuma usina encontrada.
      </p>
    );
  }

  return children;
}
