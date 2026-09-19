# VERSA — Loja Virtual de Moda Feminina

## Identificação

**Assunto:** Loja virtual de moda feminina, com foco em praticidade, estilo e experiência do usuário.  
**Equipe:** Alessandra Dias Werner de Jesus · Ana Clara Alves Torres · Laís Lacerda Gomes · Lavínia Fróis Almeida · Letícia Vieira Souza  
**Disciplina:** ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP  
**Instituição:** Centro Universitário Newton Paiva · 2026/2

> A equipe possui 5 integrantes. Nenhum sexto integrante foi criado ou incluído artificialmente.

## Sobre o projeto

O Projeto Versa é uma loja virtual de moda feminina desenvolvida para apresentar produtos de forma organizada, acessível e responsiva. A página inicial reúne navegação, destaque visual, categorias, produtos, tabela de tamanhos, informações institucionais e formulário de contato.

A implementação utiliza HTML5 semântico, CSS3 com variáveis de tema, JavaScript puro para interações e PHP para receber e validar os dados enviados pelo formulário. A proposta visual segue uma estética minimalista e sofisticada, com tons neutros e quentes relacionados ao universo da moda feminina.

## Escopo implementado

- Cabeçalho fixo com navegação.
- Busca visual com interação em JavaScript.
- Menu responsivo para telas menores.
- Hero com indicadores e troca automática de slide.
- Categorias com navegação horizontal em telas pequenas.
- Cards de produtos com favoritos.
- Contador de sacola.
- Tabela de tamanhos.
- Seção institucional.
- Formulário de contato com `fieldset` e `legend`.
- Processamento e validação básica em PHP.
- Segundo tema visual em `tema-noite.css`.
- Estados de `hover`, `focus` e `active`.
- Resposta a `prefers-reduced-motion`.
- Alvos de toque com tamanho mínimo de 44px.

## Identidade visual

| Papel | Variável | Cor | Justificativa |
|---|---|---|---|
| Cor principal | `--principal` | Marrom escuro | Usada em títulos, botões e elementos de destaque. |
| Texto sobre principal | `--sobre-principal` | Branco | Garante leitura sobre a cor principal. |
| Apoio | `--apoio` | Marrom médio | Usada em detalhes e elementos secundários. |
| Realce | `--realce` | Terracota | Destaca estados e elementos de interação. |
| Fundo | `--fundo` | Off-white | Cria uma base clara e confortável. |
| Superfície | `--superficie` | Branco | Usada em cartões, formulário e tabela. |
| Texto | `--texto` | Marrom muito escuro | Cor principal para leitura. |
| Linha | `--linha` | Bege acinzentado | Bordas e divisórias discretas. |
| Texto fraco | `--texto-fraco` | Marrom acinzentado | Informações auxiliares. |
| Principal escuro | `--principal-escuro` | Marrom mais fechado | Estados de hover e foco. |

### Contraste

Os quatro pares exigidos foram calculados pela fórmula de luminância relativa usada nas recomendações WCAG.

| Par | Relação |
|---|---:|
| `--texto` sobre `--superficie` | 17,00:1 |
| `--texto` sobre `--fundo` | 15,16:1 |
| `--principal` sobre `--superficie` | 13,53:1 |
| `--sobre-principal` sobre `--principal` | 13,53:1 |

No tema noite:
- `--texto` sobre `--superficie`: 14,44:1.
- `--texto` sobre `--fundo`: 16,45:1.
- `--principal` sobre `--superficie`: 4,58:1.
- `--sobre-principal` sobre `--principal`: 5,18:1.

Todos os quatro pares ficam acima de 4,5:1 para texto normal.

## Tipografia

O projeto utiliza uma única família do Google Fonts:

**Montserrat**, pesos 400 e 600, com fallback `Arial, sans-serif`.

A família única mantém consistência visual entre títulos, textos, menus, botões e informações dos produtos.

Escala tipográfica:
- `h1`: 2.5rem
- `h2`: 1.75rem
- `h3`: 1.25rem
- corpo: 1rem
- line-height principal: 1.6

## Segundo tema

Arquivo: `frontend/css/tema-noite.css`

O segundo tema redefine as variáveis de cor em uma composição escura inspirada no rodapé do site. Para ativá-lo, retire o comentário do link de `tema-noite.css` no `frontend/index.html`.

O arquivo do segundo tema possui somente uma regra `:root`, conforme solicitado.

## Como abrir

### Front-end

1. Abra a pasta inteira no VS Code.
2. Abra `frontend/index.html`.
3. Use o Live Server ou outro servidor HTTP local.

### PHP

Para testar o processamento do formulário, é necessário um servidor com PHP. A partir da pasta do projeto, pode ser usado:

```bash
php -S localhost:8000
```

Depois acesse:

```text
http://localhost:8000/frontend/index.html
```

O formulário envia os dados para `backend/processa-contato.php`.

## Estrutura

```text
.
├── README.md
├── frontend/
│   ├── index.html
│   ├── css/
│   │   ├── estilo.css
│   │   └── tema-noite.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       ├── hero-modelo.jpg
│       ├── cat-vestidos.jpg
│       ├── cat-blusas.jpg
│       ├── cat-calcas.jpg
│       ├── cat-jaquetas.jpg
│       ├── cat-saias.jpg
│       ├── cat-acessorios.jpg
│       ├── prod-vestido-midi.jpg
│       ├── prod-blusa-manga-longa.jpg
│       ├── prod-calca-wide-leg.jpg
│       ├── prod-blazer-oversized.jpg
│       └── banner-tecido.jpg
└── backend/
    ├── config/
    │   └── conexao.php
    └── processa-contato.php
```

## Imagens

As referências das imagens são locais e não usam links externos. Caso a equipe substitua os arquivos por fotografias próprias, recomenda-se:

- `hero-modelo.jpg`: 1600 × 900 px.
- Categorias: 800 × 1000 px.
- Produtos: 800 × 1000 px.
- `banner-tecido.jpg`: 1600 × 700 px.

As imagens devem manter boa resolução, enquadramento vertical para produtos/categorias e composição coerente com a identidade da VERSA.

## Quem fez o quê

| Integrante | Parte do projeto |
|---|---|
| Alessandra Dias Werner de Jesus | Formulários, validação e interação. |
| Ana Clara Alves Torres | Design visual, responsividade e testes. |
| Laís Lacerda Gomes | Front-end e estrutura da página inicial. |
| Lavínia Fróis Almeida | Catálogo, produtos e organização do projeto. |
| Letícia Vieira Souza | Back-end, PHP e estrutura de dados. |

## Checklist da atividade

- [x] HTML5 semântico.
- [x] CSS externo sem estilos inline.
- [x] Nenhum elemento `<br>`.
- [x] Cores centralizadas em `:root`.
- [x] Segundo tema em arquivo separado.
- [x] JavaScript puro.
- [x] Formulário com labels, fieldset e legend.
- [x] PHP recebe e valida o formulário.
- [x] Responsividade.
- [x] Estados de foco, hover e active.
- [x] Acessibilidade básica com textos alternativos e foco visível.
- [x] Respeito a `prefers-reduced-motion`.
- [x] Alvos de interação com pelo menos 44px.
- [x] Nenhuma URL externa de imagem.
- [x] Auditoria de estilos inline, blocos de estilo no HTML, quebras manuais e cores fora das variáveis.

## Imagens utilizadas

As imagens principais desta versão foram geradas especificamente para o projeto VERSA e recortadas localmente para hero, categorias, produtos e banner. Os arquivos ficam em `frontend/img/`, portanto a página não depende de links externos de imagens.

## Conta do cliente e sacola

A interface VERSA agora possui área de cliente com login, senha e criação de conta, além de sacola lateral e modal de detalhes das peças. Para a demonstração acadêmica, o cadastro é mantido no navegador com `localStorage` e a sessão de acesso usa `sessionStorage`; isso não substitui uma autenticação de produção com PHP, banco de dados e armazenamento seguro de senhas.

## Atualização — experiência de compra VERSA

O projeto foi ampliado com uma experiência de e-commerce mais detalhada: cada produto possui uma galeria com cinco fotos locais, seleção de tamanho, descrição da peça e guia de medidas. A sacola permite alterar quantidades e remover itens.

A finalização do pedido agora solicita nome completo da cliente, e-mail, telefone, CEP, cidade, endereço, número, complemento, bairro e estado. Também foram adicionadas as formas de pagamento Pix, cartão de crédito e boleto bancário; no cartão, a interface apresenta número, nome, validade e CVV para demonstração acadêmica. O checkout é apenas demonstrativo e não realiza cobrança real.

### Dados utilizados no checkout

- Nome da cliente: preenchido automaticamente quando existe uma conta VERSA ativa.
- Endereço e CEP: preenchidos pela cliente no momento da finalização.
- Pagamento: Pix, cartão de crédito ou boleto.
- Total: calculado automaticamente a partir dos itens e quantidades da sacola.
- Número do pedido: gerado localmente para a demonstração.

### Galeria de produtos

As quatro peças em destaque possuem cinco imagens locais cada, utilizadas na janela de detalhes:

- Vestido Midi Alfaiataria — 5 fotos.
- Blusa Manga Longa — 5 fotos.
- Calça Wide Leg — 5 fotos.
- Blazer Oversized — 5 fotos.

O projeto desta versão é entregue com o nome **Versa-projeto**.
