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

O Projeto Versa é uma loja virtual de moda feminina desenvolvida para pessoas que gostam de se vestir bem, acompanhar tendências e encontrar peças que combinem com seu estilo e personalidade. A proposta é oferecer uma experiência prática, intuitiva e agradável para que as clientes possam conhecer diferentes produtos, consultar detalhes das peças e encontrar opções para diferentes estilos e ocasiões.

Ao final do semestre, o projeto contará com uma página inicial, catálogo de produtos, páginas de detalhes das peças, carrinho de compras e área de cadastro e login de clientes. Também estão previstos formulários para cadastro de clientes e produtos, além da integração com um banco de dados para armazenar informações como nomes, e-mails, senhas, produtos, preços, categorias e pedidos. Como o projeto ainda está em desenvolvimento, algumas funcionalidades e decisões poderão ser ajustadas ao longo das próximas etapas. Caso ocorram mudanças, este README será atualizado.
 

# Identidade visual

As decisões de identidade visual foram pensadas para transmitir uma aparência sofisticada, minimalista e elegante, combinando tons neutros e quentes relacionados ao universo da moda feminina.

### Paleta de cores

| Papel               | Cor       | Por que esta                                                                                      |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------- |
| --principal       | #2B2523 | Utilizada em títulos, elementos principais e botões, transmitindo elegância e sofisticação.       |
| --sobre-principal | #FFFFFF | Utilizada em textos sobre a cor principal, garantindo boa leitura e contraste.                    |
| --apoio           | #A67C6B | Utilizada em destaques e elementos de apoio, acrescentando um tom quente e delicado à identidade. |
| --fundo           | #F7F3F0 | Fundo geral das páginas, criando uma aparência leve e agradável.                                  |
| --superficie      | #FFFFFF | Utilizada em cartões, formulários e áreas de conteúdo para destacar as informações.               |
| --texto           | #292524 | Cor principal dos textos, proporcionando boa legibilidade.   

*Contraste conferido* em https://webaim.org/resources/contrastchecker/:

text
--texto sobre --superficie ........ 14,47:1
--principal sobre --superficie .... 12,16:1
--sobre-principal sobre --principal 12,16:1
--texto sobre --fundo ............. 13,80:1


Todos os principais contrastes atendem ao mínimo recomendado de 4,5:1.

A identidade visual poderá ser ajustada durante o desenvolvimento caso sejam identificadas necessidades relacionadas à usabilidade, acessibilidade ou coerência visual com a proposta final do projeto.

### Tipografia

*Títulos:* Cormorant Garamond, com plano B Georgia, serif
*Pesos:* 400 e 600
*Por que esta:* A fonte possui um estilo elegante e sofisticado, combinando com a proposta visual de uma loja de moda feminina.

*Textos e interface:* Montserrat, com plano B Arial, sans-serif
*Pesos:* 400 e 600
*Por que esta:* É uma fonte limpa e fácil de ler, adequada para textos, menus, botões e informações dos produtos.

A fonte complementar será utilizada em textos, menus, botões e demais elementos de interface, contribuindo para uma navegação moderna, limpa e fácil de ler.

*Escala:* h1 2.5rem · h2 1.75rem · h3 1.25rem · corpo 1rem

### Segundo tema

*Arquivo:* frontend/css/tema-dark.css

*O que é:* Segundo tema visual do projeto, pensado para utilização em ambientes com pouca iluminação ou como opção de personalização da interface.

Para ligá-lo, tire o comentário da linha do <link> no frontend/index.html. Ela deve ficar depois do estilo.css.

---
## Como abrir

1. Abra a *pasta inteira* do projeto no VS Code.
2. Abra o arquivo frontend/index.html.
3. Clique em *Go Live* utilizando a extensão Live Server.

---

## Estrutura

text
.
├─ README.md                 esta folha de rosto
├─ frontend/                 tudo o que roda no navegador
│   ├─ index.html
│   ├─ css/
│   │   ├─ estilo.css        a folha principal do projeto
│   │   └─ tema-dark.css     o segundo tema
│   ├─ js/
│   │   └─ script.js         funcionalidades JavaScript
│   └─ img/                  imagens do projeto
└─ backend/                  tudo o que roda no servidor
    ├─ config/
    │   └─ conexao.php       conexão com o banco de dados
    └─ processa-contato.php

---

## Quem fez o quê

| Integrante                      | Parte do projeto                |
| ------------------------------- | ------------------------------- |
| Alessandra Dias Werner de Jesus | Formulários e interação         |
| Ana Clara Alves Torres          | Design, responsividade e testes |
| Laís Lacerda Gomes              | Front-end e página inicial      |
| Lavínia Fróis Almeida           | Catálogo e produtos             |
| Letícia Vieira Souza            | Banco de dados e back-end       |

---
