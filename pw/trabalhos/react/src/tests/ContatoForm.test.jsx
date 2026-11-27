
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContatoForm from '../components/ContatoForm';

describe('Formulário de contato', () => {

  it('renderiza todos os campos do formulário', () => {
    render(<ContatoForm />);

    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Telefone')).toBeInTheDocument();
    expect(screen.getByLabelText('Assunto')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensagem')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Enviar' })
    ).toBeInTheDocument();
  });

  it('valida o preenchimento obrigatório', () => {
    render(<ContatoForm />);

    expect(screen.getByLabelText('Nome')).toBeRequired();
    expect(screen.getByLabelText('E-mail')).toBeRequired();
    expect(screen.getByLabelText('Telefone')).toBeRequired();
    expect(screen.getByLabelText('Assunto')).toBeRequired();
    expect(screen.getByLabelText('Mensagem')).toBeRequired();
  });

  it('envia o formulário e apresenta uma confirmação', async () => {
    const user = userEvent.setup();

    render(<ContatoForm />);

    await user.type(
      screen.getByLabelText('Nome'),
      'Usuario Teste'
    );

    await user.type(
      screen.getByLabelText('E-mail'),
      'teste@email.com'
    );

    await user.type(
      screen.getByLabelText('Telefone'),
      '31999999999'
    );

    await user.type(
      screen.getByLabelText('Assunto'),
      'Energia fotovoltaica'
    );

    await user.type(
      screen.getByLabelText('Mensagem'),
      'Gostaria de conhecer as usinas.'
    );

    await user.click(
      screen.getByRole('button', { name: 'Enviar' })
    );

    expect(screen.getByRole('status')).toHaveTextContent(
      'Formulário validado com sucesso'
    );

    expect(screen.getByLabelText('Nome')).toHaveValue('');
    expect(screen.getByLabelText('E-mail')).toHaveValue('');
    expect(screen.getByLabelText('Telefone')).toHaveValue('');
    expect(screen.getByLabelText('Assunto')).toHaveValue('');
    expect(screen.getByLabelText('Mensagem')).toHaveValue('');
  });

});
