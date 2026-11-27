
export async function buscarUsinas(signal) {
  const resposta = await fetch(
    `${import.meta.env.BASE_URL}data/usinas.json`,
    { signal }
  );

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os dados das usinas.');
  }

  const dados = await resposta.json();

  if (!Array.isArray(dados)) {
    throw new Error('Formato de dados inválido.');
  }

  return dados;
}
