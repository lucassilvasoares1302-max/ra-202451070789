
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import UsinaCard from '../components/UsinaCard';

const usina = {
  id: 'x',
  nome: 'Usina X',
  cidade: 'Uberaba - MG',
  capacidade: 1500,
  investimento: 1750000,
  economiaMensal: 60000,
  imagem: 'usina-x.jpg',
  tabela: 'geracao-x.png',
  periodo: 'Julho de 2025 a junho de 2026',
  descricao: 'Usina fotovoltaica localizada em Uberaba.'
};

describe('Componente UsinaCard', () => {

  it('exibe o nome e a cidade da usina', () => {
    render(
      <MemoryRouter>
        <UsinaCard usina={usina} />
      </MemoryRouter>
    );

    expect(screen.getByText('Usina X')).toBeInTheDocument();

    expect(
      screen.getByText('Uberaba - MG')
    ).toBeInTheDocument();
  });

  it('possui um link para a página de detalhes', () => {
    render(
      <MemoryRouter>
        <UsinaCard usina={usina} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('link', {
        name: /saiba mais sobre a usina x/i
      })
    ).toHaveAttribute('href', '/usina/x');
  });

});
