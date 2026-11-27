
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EstadoCarregamento from '../components/EstadoCarregamento';

describe('Estados da consulta de dados', () => {

  it('exibe a mensagem de carregamento', () => {
    render(<EstadoCarregamento carregando={true} />);

    expect(screen.getByRole('status')).toHaveTextContent(
      'Carregando dados das usinas'
    );
  });

  it('exibe o erro e permite uma nova tentativa', async () => {
    const tentarNovamente = vi.fn();
    const user = userEvent.setup();

    render(
      <EstadoCarregamento
        erro="Falha na consulta"
        tentarNovamente={tentarNovamente}
      />
    );

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Falha na consulta'
    );

    await user.click(
      screen.getByRole('button', {
        name: 'Tentar novamente'
      })
    );

    expect(tentarNovamente).toHaveBeenCalledTimes(1);
  });

  it('exibe uma mensagem quando não existem resultados', () => {
    render(<EstadoCarregamento vazio={true} />);

    expect(screen.getByRole('status')).toHaveTextContent(
      'Nenhuma usina encontrada'
    );
  });

  it('exibe o conteúdo quando a consulta tem sucesso', () => {
    render(
      <EstadoCarregamento>
        <p>Usina X</p>
      </EstadoCarregamento>
    );

    expect(screen.getByText('Usina X')).toBeInTheDocument();
  });

});
