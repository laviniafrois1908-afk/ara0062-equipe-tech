# ara0062-equipe-tech
# Equipe Tech

Projeto da disciplina **Desenvolvimento Web em HTML5, CSS, JavaScript e PHP**.

## Líder

| Nome          | Matrícula    | GitHub                |  Período   |
| ------------- | ------------ | --------------------- |------------|
| Lavínia Fróis | 202503777012 | @laviniafrois1908-afk | 4°

## Integrantes


| Nome                    | Matrícula    | GitHub            | Período    |
| ------------------      | ------------ | ----------------- |----------- |
| Laís Lacerda Gomes      | 202503776962 | @laislacerdagomes | 4º         |
| Letícia Vieira Souza    | 202603075125 | @letvieirasouza   | 2°         |
| Alessandra Dias Werner  | 202603075401 | @alessandrawerner | 2°         |
| Ana Clara Alves Torres  | 202603164391 | @anaagustd        | 2°         |

# Projeto Versa

*Assunto:* Loja virtual de moda feminina, com foco em praticidade, estilo e experiência do usuário.
*Equipe:* Alessandra Dias Werner de Jesus · Ana Clara Alves Torres · Laís Lacerda Gomes · Lavínia Fróis Almeida · Letícia Vieira Souza
*Disciplina:* ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP
*Centro Universitário Newton Paiva · 2026/2*

## Sobre o projeto

O projeto consiste no desenvolvimento de uma loja virtual de moda feminina, criada para pessoas que gostam de se vestir bem, explorar novas tendências e encontrar peças que combinem com sua personalidade. O site oferecerá uma experiência prática, intuitiva e agradável, permitindo que as clientes conheçam as coleções, consultem os detalhes de cada produto e encontrem opções para diferentes estilos e ocasiões.

Até o final do semestre, o projeto prevê a implementação das principais páginas da loja virtual, incluindo a página inicial, o catálogo de produtos, a página de detalhes dos produtos, o carrinho e as áreas de cadastro e login. Também será desenvolvido um formulário para cadastro de clientes e produtos, com as informações relevantes armazenadas em um banco de dados. O banco deverá registrar dados como nome, e-mail, senha, produtos, preços, categorias e pedidos.

Este planejamento poderá ser ajustado ao longo do desenvolvimento, de acordo com as necessidades e decisões da equipe. Sempre que houver alterações no escopo ou nas funcionalidades previstas, este documento será atualizado. 

# Identidade visual

As decisões de identidade visual apresentadas nesta seção serão utilizadas no arquivo frontend/css/estilo.css. A proposta é manter o site sofisticado, minimalista e elegante, utilizando tons neutros e quentes que valorizem os produtos e proporcionem uma experiência visual agradável.

### Paleta de cores

| Papel               | Cor       | Justificativa                                                                                                      |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| --principal       | #2B2523 | Marrom café escuro utilizado nos elementos principais, transmitindo sofisticação e elegância.                      |
| --sobre-principal | #FFFFFF | Branco utilizado sobre a cor principal, garantindo boa leitura e contraste.                                        |
| --apoio           | #A67C6B | Nude amarronzado utilizado em botões, destaques e detalhes, trazendo delicadeza e personalidade.                   |
| --fundo           | #F7F3F0 | Off-white utilizado como fundo geral, proporcionando uma aparência leve e sofisticada.                             |
| --superficie      | #FFFFFF | Branco utilizado em cartões, produtos e áreas de conteúdo, criando contraste com o fundo.                          |
| --texto           | #292524 | Preto suave utilizado nos textos, proporcionando excelente legibilidade sem deixar a interface visualmente pesada. |

*Contraste conferido em:*
https://webaim.org/resources/contrastchecker/

text
--texto sobre --superficie ......... 14,47:1
--principal sobre --superficie ..... 12,16:1
--sobre-principal sobre --principal  12,16:1


Todos os contrastes principais atendem ao mínimo recomendado de *4,5:1* para textos, contribuindo para uma interface acessível e de fácil leitura.

A identidade visual poderá ser ajustada durante o desenvolvimento caso sejam identificadas necessidades relacionadas à usabilidade, acessibilidade ou coerência visual com a proposta final do projeto.

### Tipografia

**Fonte principal:** Cormorant Garamond, com plano B `Georgia, serif`
**Pesos:** 400 e 600
**Por que esta:** A tipografia serifada proporciona um aspecto sofisticado e editorial, reforçando a identidade de uma marca de moda feminina.

**Fonte complementar:** Montserrat, com plano B `Arial, sans-serif`
**Pesos:** 400 e 600

A fonte complementar será utilizada em textos, menus, botões e demais elementos de interface, contribuindo para uma navegação moderna, limpa e fácil de ler.

**Escala:** `h1` 2.5rem · `h2` 1.75rem · `h3` 1.25rem · corpo 1rem

### Segundo tema

*Arquivo:* frontend/css/tema-dark.css

*O que é:* Tema alternativo em modo escuro, desenvolvido para oferecer uma experiência visual diferente da versão principal. Utiliza tons escuros, neutros e detalhes em nude, mantendo a identidade sofisticada e minimalista da marca. Poderá ser utilizado especialmente para navegação noturna ou como opção de personalização da interface.

Para ativá-lo, retire o comentário da linha do <link> no arquivo frontend/index.html. Essa linha deve permanecer *depois* do estilo.css.

---

## Estrutura

text
.
├─ README.md                 esta folha de rosto
├─ frontend/                 tudo o que roda no navegador
│   ├─ index.html
│   ├─ css/
│   │   ├─ estilo.css        folha de estilos principal do projeto
│   │   └─ tema-dark.css     segundo tema: apenas variáveis
│   ├─ js/
│   │   └─ script.js         vazio até o ciclo 6
│   └─ img/
└─ backend/                  tudo o que roda no servidor
    ├─ config/
    │   └─ conexao.php       vazio até o ciclo 8
    └─ processa-contato.php


---

## Quem fez o quê

| Integrante                      | Responsabilidade                |
| ------------------------------- | ------------------------------- |
| Alessandra Dias Werner de Jesus | Formulários e interação         |
| Ana Clara Alves Torres          | Design, responsividade e testes |
| Laís Lacerda Gomes              | Front-end e página inicial      |
| Lavínia Fróis Almeida           | Catálogo e produtos             |
| Letícia Vieira Souza            | Banco de dados e back-end       |
