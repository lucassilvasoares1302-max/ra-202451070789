
import {
  describe,
  it,
  expect,
  vi,
  afterEach
} from 'vitest';

import { buscarUsinas } from '../services/usinasService';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('Serviço de consulta das usinas', () => {

  it('retorna os dados quando a consulta tem sucesso', async () => {
    const dados = [
      {
        id: 'x',
        nome: 'Usina X',
        capacidade: 1500
      }
    ];

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => dados
    }));

    const resultado = await buscarUsinas();

    expect(resultado).toEqual(dados);
  });

  it('trata erros na resposta HTTP', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      status: 500
    }));

    await expect(buscarUsinas()).rejects.toThrow(
      'Não foi possível carregar os dados das usinas.'
    );
  });

  it('identifica dados em formato inválido', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ invalido: true })
    }));

    await expect(buscarUsinas()).rejects.toThrow(
      'Formato de dados inválido.'
    );
  });

  it('trata falhas de conexão', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(
      new Error('Falha de conexão')
    ));

    await expect(buscarUsinas()).rejects.toThrow(
      'Falha de conexão'
    );
  });

});
