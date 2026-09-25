# RA 202451070789 — Lucas Silva Soares

Repositório de exercícios práticos das disciplinas cursadas em **2026.2**.

- Curso: Sistemas de Informação
- Professor: Thalles Noce

## Disciplinas

| Pasta | Disciplina |
|---|---|
| `aaw/` | Arquitetura de Aplicações Web |
| `pw/`  | Programação Web |

Em cada disciplina:

- `aulas/` — exercícios práticos realizados em aula
- `trabalhos/` — trabalhos e entregas avaliativas

## Conteúdo

- Neste repositório serão abordadas informações a respeito da geração fotovoltaica de 3 usinas localizadas em MG, abrangendo dados de geração e economia até projetos realizados para promoção do uso da energia sustentável.
  
  https://lucassilvasoares1302-max.github.io/ra-202451070789/

| Pasta 'trabalhos/' | Arquivo |
|---|---|
| index.html | - Main HTML |
| trabalhoSTYLE.css | - Css das páginas |
| usina-x.html | - Html da página da usina X |
| usina-y.html | - Html da página da usina Y |
| usina-z.html | - Html da página da usina Z |

- A pasta 'imagens/' foi criada para alocação das imagens utilizadas nas páginas.

## Desenvolvimento

- O desenvolvimento deste repositório foi criado utilizando https://github.com/lucassilvasoares1302-max/Portifolio-Profissional como base, note que em sua origem suas dimensões são relativamente semelhantes, porém com seus devidos aprimoramentos e adaptações para esta atividade.

  > O primeiro passo foi a definição de um tema compatível com o projeto, que simultaneamente seja objetivo para a elaboração de indicadores e flexível para trabalharmos a criatividade do desenvolvimento, mas que não fuja do principal objetivo que seria a criação de um código em Html 5 e Css utilizando bem a ideia base de construção de layouts de sites de forma que acompanhe métodos e ferramentas de códigos atuais, e a geração de dados relacionadas à usinas fotovoltaicas é perfeita para este tipo de atividade.

- Após a seleção de tema, o foco foi pensar em um layout que tenha boa acessibilidade e seja fiel ao tema abordado, por isso a utilização das cores verde e com os botões de navegação logo no primeiro cabeçalho justificando o uso do Header container com um grande titulo ao lado para entendimento do leitor do que será tratado e onde se encontra no site.

- O próximo passo era trazer informações sobre o projeto que seria realizado e detalhes. No repositório utilizado como base havia uma sessão semelhante porém divida em partes e contêineres diferentes por tratar de assuntos diversos. Para o Hero deste projeto, a intenção era trazer uma introdução do problema abordado de maneira resumida e ilustrada, por isso o posicionamento de uma imagem logo ao lado da descrição, buscando trazer uma identificação visual do texto.
   > A div que trata o "Sobre" foi um ponto de dúvida na decisão do layout, porquê por mais que sejam pontos diferentes o "Hero" e o "Sobre" se completam do ponto de vista do conteúdo, sendo um a abordagem e o outro a contextualização, por isso a decisão dos dois ficarem juntos na mesma sessão, sem a divisão de contêineres ou a criação de uma section específica para o Sobre.

- Na sessão que trata sobre Geração por usina foi realizado um trabalho mais simples no layout, trazer poucas informações sobre cada usina e direcionar para uma segunda página onde seria abordado de forma mais aprofundada os dados de cada uma, porém, por mais simples que seja foi o trecho onde o trabalho foi mais complicado. O uso de contêineres era simples mas trazer toda formatação com títulos e subtítulos bem organizados foi um desafio, além do direncionamento para a outra página nessa sessão.
   > Inicialmente parecia simples mas a utilização do titulo "Usina X" e sua dimensão "1500 kwp" elocalização " Uberaba- MG porém se juntasse os 3 como div de cabeçalho visualmente não ficava de forma organizada por isso a opção de separar cada um como span class, particularmente segui essa opção depois de pedir sugestões para a IA nessa sessão, trarei um tópico de como utilizei a IA nesse repositório. E por último trazer um redirecionamento para uma outra página foi o maior desafio, porquê no código utilizado como base não havia algo do tipo e eu não tinha experiencia semelhante, porém na prática foi bem simples, pedi a orientação de uma IA para fazer e o que tive que acrescentar no código foi somente a "href="usina-y.html">aqui</a." respetivamente para cada usina e criar um HTML que seria o direcionamento trazendo estas informações.

- Nas sessões de Projetos e contatos, foram onde menos precisei alterar do código usado como base
