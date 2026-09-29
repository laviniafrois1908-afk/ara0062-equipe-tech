# VERSA

**Assunto:** Loja virtual de moda feminina, com foco em praticidade, estilo e experiência do usuário.
**Equipe:** Alessandra · Ana Clara · Laís · Lavínia · Letícia
**Disciplina:** ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP
**Centro Universitário Newton Paiva · 2026/2**

---

## Sobre o projeto

A VERSA é uma loja virtual de moda feminina criada para pessoas que desejam encontrar roupas de forma prática, organizada e agradável. O site permite visualizar produtos, conhecer suas informações e navegar por uma interface pensada para facilitar a experiência de compra.

Até o final do semestre, o projeto terá páginas para apresentação e catálogo de produtos, informações sobre as peças, formulário de contato e funcionalidades desenvolvidas com HTML5, CSS, JavaScript e PHP. O projeto também contará com uma estrutura de back-end para processar os dados enviados pelos usuários.

---

## Identidade visual

A identidade visual foi desenvolvida pensando em uma loja de moda feminina que busca transmitir elegância, sofisticação e modernidade. As cores e a tipografia foram escolhidas para manter uma aparência organizada e agradável, sem prejudicar a leitura.

### Paleta

| Papel               | Cor       | Por que esta                                                                                                            |
| ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `--principal`       | `#38241E` | Marrom escuro usado como cor principal. Transmite sofisticação e combina com a proposta elegante e moderna da loja.     |
| `--sobre-principal` | `#FFFFFF` | Branco utilizado sobre a cor principal para garantir alto contraste e facilitar a leitura.                              |
| `--apoio`           | `#8E6A5A` | Marrom mais claro utilizado como cor de apoio e para complementar a identidade visual sem competir com a cor principal. |
| `--fundo`           | `#F6F1ED` | Bege claro usado no fundo da página para criar uma aparência leve, acolhedora e confortável para a navegação.           |
| `--superficie`      | `#FFFFFF` | Branco utilizado em cartões e áreas de conteúdo para criar contraste com o fundo e destacar as informações.             |
| `--texto`           | `#241A17` | Marrom muito escuro utilizado nos textos para proporcionar boa legibilidade e manter a identidade visual da marca.      |

**Contraste conferido** em https://webaim.org/resources/contrastchecker/:

```text
--texto sobre --superficie ............ 17,00:1
--principal sobre --superficie ....... 14,59:1
--sobre-principal sobre --principal .. 14,59:1
--texto-fraco sobre --fundo .......... 5,91:1
```

Todos os pares utilizados para texto atendem ao mínimo de 4,5:1 exigido para texto normal.

### Tipografia

**Fonte:** `"Montserrat"`, com plano B `Arial, sans-serif`

**Pesos:** 400 e 600

**Por que esta:** A Montserrat possui uma aparência moderna e limpa, combinando com a proposta de uma loja de moda feminina e mantendo boa legibilidade em diferentes tamanhos de tela.

**Escala:** `h1` 2.5rem · `h2` 1.75rem · `h3` 1.25rem · corpo 1rem

### Segundo tema

O segundo tema está no arquivo `frontend/css/tema-noite.css`. Ele utiliza as mesmas variáveis do tema principal, mas com valores diferentes, permitindo que a página tenha uma alternativa visual em modo escuro.

O tema foi pensado para ser utilizado como **modo noturno**, oferecendo uma opção de visualização com fundo escuro e cores adaptadas para manter a leitura e o contraste.

O arquivo é carregado depois do `estilo.css`, conforme solicitado na atividade, e permanece comentado no `index.html` durante a entrega.

---

## Como abrir

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Entre em `frontend`.
4. Abra o arquivo `index.html` no navegador.

Para testar as funcionalidades do back-end em PHP, é necessário utilizar um ambiente que execute PHP, como XAMPP ou outro servidor local compatível.

---

## Estrutura

```text
/
├── README.md
│
├── frontend/
│   ├── index.html
│   │
│   ├── css/
│   │   ├── estilo.css
│   │   └── tema-noite.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── img/
│
└── backend/
    ├── config/
    │   └── conexao.php
    │
    └── processa-contato.php
```

---

## Quem fez o quê

| Integrante     | Responsabilidade                              |
| -------------- | --------------------------------------------- |
| **Alessandra** | Formulários, validação e interação da página. |
| **Ana Clara**  | Design visual, responsividade e testes.       |
| **Laís**       | Front-end e estrutura da página inicial.      |
| **Lavínia**    | Catálogo, produtos e organização do conteúdo. |
| **Letícia**    | Back-end, PHP e estrutura de dados.           |

---
