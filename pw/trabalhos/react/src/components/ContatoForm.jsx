
import { useState } from 'react';

export default function ContatoForm() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [feedback, setFeedback] = useState('');

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setFormulario(anterior => ({
      ...anterior,
      [name]: value
    }));

    setFeedback('');
  }

  function enviarFormulario(event) {
    event.preventDefault();

    if (
      !formulario.nome.trim() ||
      !formulario.email.trim() ||
      !formulario.telefone.trim() ||
      !formulario.assunto.trim() ||
      !formulario.mensagem.trim()
    ) {
      setFeedback('Preencha todos os campos.');
      return;
    }

    setFeedback(
      `Obrigado, ${formulario.nome}! Formulário validado com sucesso. Envio simulado.`
    );

    setFormulario({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  }

  return (
    <form onSubmit={enviarFormulario}>

      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        placeholder="Seu nome"
        value={formulario.nome}
        onChange={atualizarCampo}
        required
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Seu email"
        value={formulario.email}
        onChange={atualizarCampo}
        required
      />

      <label htmlFor="telefone">Telefone</label>
      <input
        id="telefone"
        name="telefone"
        type="tel"
        placeholder="Seu telefone"
        value={formulario.telefone}
        onChange={atualizarCampo}
        required
      />

      <label htmlFor="assunto">Assunto</label>
      <input
        id="assunto"
        name="assunto"
        type="text"
        placeholder="Assunto do contato"
        value={formulario.assunto}
        onChange={atualizarCampo}
        required
      />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        name="mensagem"
        placeholder="Sua mensagem"
        rows="5"
        value={formulario.mensagem}
        onChange={atualizarCampo}
        required
      />

      <button type="submit">
        Enviar
      </button>

      {feedback && (
        <p role="status">{feedback}</p>
      )}

    </form>
  );
}
