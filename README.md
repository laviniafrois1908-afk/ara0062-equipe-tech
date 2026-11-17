
# VERSA — Loja Virtual de Moda Feminina

**Assunto:** Loja virtual de moda feminina integrada a banco de dados MySQL, permitindo explorar coleções e categorias, consultar guia de medidas, gerir sacola de compras, cadastrar clientes, finalizar pedidos e acompanhar o histórico de compras.
**Disciplina:** ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP
**Centro Universitário Newton Paiva · 2026/2**

---

## 👥 Equipe e Divisão de Responsabilidades

* **Alessandra Dias Werner de Jesus**  
  * **Área:** Formulários e interação.  
  * **Atividades:** Estruturação dos formulários e desenvolvimento de funcionalidades de interação.

* **Ana Clara Alves Torres**  
  * **Área:** Design, responsividade e testes.  
  * **Atividades:** Identidade visual, design da interface, responsividade e testes de usabilidade.

* **Laís Lacerda Gomes**  
  * **Área:** Front-end e página inicial.  
  * **Atividades:** Estrutura do front-end e desenvolvimento da página inicial.

* **Lavínia Fróis Almeida**  
  * **Área:** Catálogo, produtos e validações.  
  * **Atividades:** Desenvolvimento do catálogo e páginas de produtos, e validação JavaScript do formulário de contato.

* **Letícia Vieira Souza**  
  * **Área:** Banco de dados e back-end.  
  * **Atividades:** Estruturação do back-end em PHP e desenvolvimento do banco de dados relacional.

---

## Como rodar o projeto no XAMPP

1. **Clonar ou copiar a pasta do projeto:**
   Coloque a pasta `ara0062-equipe-tech` dentro do diretório `htdocs` do seu XAMPP (ex.: `C:\xampp\htdocs\ara0062-equipe-tech`).

2. **Iniciar os serviços:**
   Abra o painel de controle do **XAMPP** e inicie os módulos **Apache** e **MySQL**.

3. **Importar o banco de dados:**
   - Acesse o **phpMyAdmin** pelo navegador: `http://localhost/phpmyadmin` (ou com a porta `http://localhost:8080/phpmyadmin` conforme a sua configuração local).
   - Clique na aba **Importar**, selecione o arquivo `backend/sql/banco.sql` e clique em **Importar** (o script criará automaticamente o banco `projeto_versa` e as tabelas `usuarios`, `pedidos` e `contatos`).

4. **Abrir a aplicação no navegador:**
   Acesse o endereço (ajustando a porta se utilizar a `8080`):
   `http://localhost:8080/ara0062-equipe-tech/frontend/index.html`

---

## Estrutura do Projeto


/
├── README.md
│
├── frontend/
│   ├── index.html
│   ├── esqueci-senha.html
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
    ├── sql/
    │   └── banco.sql
    │
    ├── busca-pedidos.php
    ├── processa-cadastro.php
    ├── processa-checkout.php
    ├── processa-contato.php
    ├── processa-esqueci-senha.php
    ├── processa-login.php
    └── verifica-sessao.php

```

```

```
