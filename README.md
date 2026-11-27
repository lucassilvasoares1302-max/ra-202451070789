
# RA 202451070789 — Lucas Silva Soares

- Aluno: Lucas Silva Soares
- RA: 202451070789
- Curso: Sistemas de Informação
- Instituição: Newton Paiva
- Professor: Thalles Noce
- Semestre: 2026.2

## Disciplinas

| Pasta | Disciplina |
|---|---|
| `aaw/` | Arquitetura de Aplicações Web |
| `pw/` | Programação Web |

Em cada disciplina:

- `aulas/` — exercícios práticos realizados em aula.
- `trabalhos/` — trabalhos e entregas avaliativas.

# Projeto Semestral — Geração Fotovoltaica de Fazendas em MG

## 1. Sobre o projeto

O projeto apresenta informações relacionadas à geração fotovoltaica de oito usinas localizadas em Minas Gerais, abrangendo capacidade instalada, investimentos, economia mensal, dados ilustrativos de geração e projetos voltados à promoção da energia sustentável.

O objetivo é apresentar essas informações de maneira organizada, interativa, responsiva e acessível, aplicando os conhecimentos adquiridos durante a disciplina de Programação Web.

Os dados das usinas possuem finalidade acadêmica e demonstrativa.

## 2. Acesso ao projeto

Site publicado no GitHub Pages:

https://lucassilvasoares1302-max.github.io/ra-202451070789/

## 3. Primeira fase — HTML5 e CSS

A primeira fase consistiu no desenvolvimento de um site utilizando HTML5 e CSS, inicialmente apresentando três usinas fotovoltaicas.

O desenvolvimento utilizou como referência meu portfólio profissional:

https://github.com/lucassilvasoares1302-max/Portifolio-Profissional

A estrutura foi adaptada para atender ao tema e aos requisitos da atividade.

A escolha das cores verdes está relacionada à sustentabilidade e à energia renovável. O cabeçalho concentra os elementos de navegação, enquanto a seção Hero apresenta uma introdução ilustrada sobre o projeto.

As páginas secundárias foram desenvolvidas para apresentar informações detalhadas de cada usina, utilizando links HTML para realizar a navegação.

### Recursos utilizados na primeira fase

- HTML5 semântico.
- CSS personalizado.
- Flexbox e Grid.
- Media queries.
- Responsividade.
- Acessibilidade.
- Navegação tradicional entre páginas.
- Validação de código pelo W3C.
- Publicação no GitHub Pages.

Os arquivos originais da primeira fase foram preservados no repositório.

## 4. Segunda fase — React

Na segunda fase, o projeto foi migrado para React, mantendo a identidade visual desenvolvida anteriormente.

A aplicação passou a utilizar componentes reutilizáveis, gerenciamento de estados, carregamento assíncrono de dados, rotas dinâmicas, contexto compartilhado e testes automatizados.

A quantidade de usinas foi ampliada de três para oito registros.

## 5. Funcionalidades

- Listagem de oito usinas fotovoltaicas.
- Busca por nome ou cidade.
- Filtragem dinâmica dos registros.
- Páginas individuais de detalhes.
- Informações sobre capacidade instalada.
- Informações sobre investimentos e economia mensal.
- Apresentação de dados ilustrativos de geração.
- Projetos relacionados à sustentabilidade.
- Formulário de contato com cinco campos.
- Validação dos campos obrigatórios.
- Confirmação de envio simulado.
- Tratamento dos estados de carregamento, erro, vazio e sucesso.
- Layout responsivo para diferentes dispositivos.

## 6. Tecnologias e ferramentas

| Tecnologia | Aplicação no projeto |
|---|---|
| HTML5 | Estrutura semântica das páginas. |
| CSS3 | Estilização, responsividade e identidade visual. |
| JavaScript | Implementação da lógica e interatividade. |
| React | Desenvolvimento da interface por componentes. |
| Vite | Ambiente de desenvolvimento e build de produção. |
| Node.js | Ambiente de execução das ferramentas de desenvolvimento. |
| NPM | Gerenciamento das dependências do projeto. |
| ESLint | Identificação de problemas e padronização do código. |
| React Router | Navegação entre as páginas da aplicação. |
| Context API | Compartilhamento de dados e estados entre componentes. |
| JSON | Armazenamento dos dados simulados das usinas. |
| Fetch API | Carregamento assíncrono dos dados. |
| Vitest | Execução dos testes automatizados. |
| Testing Library | Testes de componentes e interações. |
| Git | Controle de versão. |
| GitHub | Armazenamento e gerenciamento do repositório. |
| GitHub Codespaces | Ambiente de desenvolvimento pelo navegador. |
| GitHub Actions | Automação dos testes, build e publicação. |
| GitHub Pages | Hospedagem da aplicação. |
| Lighthouse | Avaliação da qualidade técnica do site. |

## 7. Conceitos de React aplicados

### Componentes

A interface foi dividida em componentes independentes e reutilizáveis, facilitando a organização e manutenção do código.

Entre os componentes desenvolvidos estão:

- Header.
- Footer.
- UsinaCard.
- ProjetoCard.
- ContatoForm.
- EstadoCarregamento.

### Props

As props foram utilizadas para transmitir informações entre componentes, permitindo reutilizar a mesma estrutura para apresentar diferentes usinas e projetos.

### Composição

A composição permite combinar componentes menores para construir interfaces mais completas, evitando a repetição de código.

### useState

O useState foi utilizado para controlar informações que podem sofrer alterações durante a interação do usuário.

Exemplos:

- Campos do formulário.
- Termo de busca das usinas.
- Mensagens de confirmação.
- Estados relacionados ao carregamento dos dados.

### useEffect

O useEffect foi utilizado para executar o carregamento assíncrono dos dados das usinas, permitindo realizar a consulta quando necessário.

### Fetch API

A Fetch API realiza a leitura dos dados armazenados em um arquivo JSON, simulando a comunicação com uma API.

Foram implementados quatro estados:

- Carregando: enquanto os dados estão sendo consultados.
- Erro: quando ocorre uma falha na consulta.
- Vazio: quando não existem registros para apresentar.
- Sucesso: quando os dados são carregados corretamente.

### React Router

O React Router permite navegar entre as páginas sem realizar o recarregamento completo da aplicação.

Foi utilizado o HashRouter para facilitar a compatibilidade com a hospedagem no GitHub Pages.

A página de detalhes utiliza um identificador dinâmico para apresentar as informações da usina selecionada.

Também foi implementada uma página para rotas não encontradas.

### Context API

A Context API foi utilizada para centralizar e compartilhar os dados das usinas e os estados relacionados ao carregamento.

Sua utilização evita a necessidade de transmitir essas informações repetidamente por props entre diferentes níveis de componentes.

## 8. Dados das usinas

A aplicação possui oito registros demonstrativos.

| Usina | Cidade | Capacidade instalada |
|---|---|---:|
| Usina X | Uberaba | 1.500 kWp |
| Usina Y | Varginha | 2.000 kWp |
| Usina Z | Carlos Chagas | 2.500 kWp |
| Usina A | Janaúba | 1.800 kWp |
| Usina B | Pirapora | 2.200 kWp |
| Usina C | Montes Claros | 3.000 kWp |
| Usina D | Paracatu | 1.600 kWp |
| Usina E | Januária | 2.400 kWp |
| Total | Minas Gerais | 17.000 kWp |

### Indicadores demonstrativos

- Capacidade instalada total: 17.000 kWp.
- Investimento total: R$ 20.450.000,00.
- Economia mensal total: R$ 680.000,00.

Os dados são armazenados em `public/data/usinas.json`.

As informações, imagens e tabelas possuem finalidade ilustrativa e acadêmica, incluindo a reutilização de imagens e tabelas entre algumas usinas.

## 9. Estrutura do projeto React

    pw/trabalhos/react/
    ├── public/
    │   ├── data/
    │   │   └── usinas.json
    │   └── imagens/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── UsinaCard.jsx
    │   │   ├── ProjetoCard.jsx
    │   │   ├── ContatoForm.jsx
    │   │   └── EstadoCarregamento.jsx
    │   ├── context/
    │   │   ├── UsinasContext.js
    │   │   └── UsinasProvider.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── UsinaDetalhes.jsx
    │   │   └── NaoEncontrado.jsx
    │   ├── services/
    │   │   └── usinasService.js
    │   ├── tests/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── trabalhoSTYLE.css
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── eslint.config.js
    └── vite.config.js

## 10. Instalação e execução

### Pré-requisitos

- Git.
- Node.js 22.12 ou superior da linha 22, ou versão compatível com o Vite.
- NPM.
- Navegador web.

Também é possível utilizar o GitHub Codespaces, sem necessidade de instalar essas ferramentas localmente.

### Clonar o repositório

```bash
git clone https://github.com/lucassilvasoares1302-max/ra-202451070789.git
```

### Acessar a pasta do projeto

```bash
cd ra-202451070789/pw/trabalhos/react
```

### Instalar as dependências

```bash
npm ci
```

### Executar a aplicação

```bash
npm run dev
```

### Executar os testes automatizados

```bash
npm run test
```

### Verificar o código com ESLint

```bash
npm run lint
```

### Gerar o build de produção

```bash
npm run build
```

### Visualizar o build

```bash
npm run preview
```

## 11. Testes automatizados

Foram desenvolvidos 13 testes automatizados utilizando Vitest e Testing Library.

| Arquivo | Testes aprovados |
|---|---:|
| ContatoForm.test.jsx | 3 |
| EstadoCarregamento.test.jsx | 4 |
| UsinaCard.test.jsx | 2 |
| usinaService.test.js | 4 |
| Total | 13 |

Resultados obtidos:

- 13 de 13 testes aprovados.
- 4 arquivos de testes aprovados.
- ESLint executado sem erros.
- Build de produção concluído com sucesso.

Também foram realizados testes manuais das funcionalidades no ambiente de desenvolvimento e no site publicado.

## 12. Responsividade e acessibilidade

O projeto mantém uma estrutura responsiva, adaptando seus elementos para diferentes dimensões de tela.

Foram utilizados recursos como:

- HTML semântico.
- Textos alternativos nas imagens.
- Labels associados aos campos do formulário.
- Contraste entre textos e fundos.
- Navegação por teclado.
- Mensagens de estado e feedback.
- Flexbox, Grid e media queries.

### Resultados do Lighthouse

A análise realizada na página inicial do site publicado apresentou os seguintes resultados:

| Categoria | Pontuação |
|---|---:|
| Performance | 100/100 |
| Acessibilidade | 100/100 |
| Boas práticas | 96/100 |
| SEO | 100/100 |

A pontuação de acessibilidade superou a meta de 90 pontos estabelecida para o trabalho.

Os resultados representam a avaliação automatizada realizada pelo Lighthouse e não substituem uma auditoria completa de acessibilidade.

## 13. Publicação e CI/CD

A publicação foi automatizada utilizando GitHub Actions e GitHub Pages.

O workflow está localizado em:

`.github/workflows/pages.yml`

A cada atualização enviada para a branch main, o GitHub Actions executa as seguintes etapas:

1. Download dos arquivos do repositório.
2. Configuração do Node.js.
3. Instalação das dependências.
4. Execução dos testes automatizados.
5. Verificação do código com ESLint.
6. Geração do build de produção.
7. Publicação no GitHub Pages.

Caso alguma etapa apresente erro, a publicação é interrompida.

A versão React foi publicada com sucesso e suas funcionalidades foram verificadas no ambiente de produção.

## 14. Uso de Inteligência Artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante as duas fases do desenvolvimento.

Na primeira fase, o auxílio ocorreu principalmente na adaptação do CSS, organização dos elementos HTML, navegação entre páginas, correção de erros de sintaxe e configuração inicial do GitHub Pages.

Foram utilizados esboços visuais como referência para orientar as alterações no layout, mantendo a identidade visual desejada para o projeto.

Na segunda fase, a inteligência artificial foi utilizada para orientar e gerar trechos de código relacionados aos seguintes pontos:

- Configuração do ambiente React e Vite.
- Migração do HTML tradicional para componentes React.
- Organização da estrutura de arquivos.
- Implementação de props e composição.
- Gerenciamento de estados com useState.
- Carregamento de dados com useEffect e Fetch API.
- Estruturação dos dados em JSON.
- Implementação do React Router.
- Configuração da Context API.
- Desenvolvimento e validação do formulário.
- Criação dos testes automatizados.
- Identificação e resolução de erros.
- Configuração do GitHub Actions.
- Organização da documentação.

As implementações foram acompanhadas de explicações, testes práticos e verificações das funcionalidades.

O objetivo da utilização da IA foi auxiliar no desenvolvimento, na resolução de dificuldades e na compreensão dos conceitos trabalhados durante a disciplina.

## 15. Limitações e melhorias futuras

O projeto possui finalidade acadêmica e utiliza dados simulados.

O formulário realiza a validação dos campos e apresenta uma confirmação de envio, mas não possui integração com um servidor de e-mails ou banco de dados.

Como melhorias futuras, podem ser implementados:

- Integração com dados reais de geração fotovoltaica.
- Banco de dados.
- Gráficos interativos de geração.
- Painéis de indicadores.
- Envio real de formulários.
- Monitoramento das usinas em tempo real.

## 16. Considerações finais

O desenvolvimento deste projeto permitiu aplicar os conhecimentos adquiridos durante a disciplina de Programação Web, desde a construção de páginas utilizando HTML e CSS até a implementação de uma aplicação React com componentes reutilizáveis, gerenciamento de estados, navegação dinâmica, testes automatizados e publicação contínua.

A migração para React permitiu melhorar a organização, manutenção, escalabilidade e interatividade da aplicação, preservando a identidade visual desenvolvida na primeira fase.

O projeto também possibilitou relacionar conhecimentos de tecnologia da informação com sustentabilidade e geração de energia fotovoltaica.

---

Desenvolvido por Lucas Silva Soares.

Sistemas de Informação — Newton Paiva — 2026.2.
