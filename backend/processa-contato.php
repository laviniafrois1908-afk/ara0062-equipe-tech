<?php

declare(strict_types=1);

function limpar(string $valor): string
{
    return trim(strip_tags($valor));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Método não permitido.';
    exit;
}

$nome = limpar($_POST['nome'] ?? '');
$email = limpar($_POST['email'] ?? '');
$telefone = limpar($_POST['telefone'] ?? '');
$assunto = limpar($_POST['assunto'] ?? '');
$mensagem = limpar($_POST['mensagem'] ?? '');

$assuntosPermitidos = [
    'Dúvida de tamanho',
    'Encomenda',
    'Troca',
    'Outro'
];

$erros = [];

if ($nome === '' || mb_strlen($nome) < 2) {
    $erros[] = 'Informe um nome válido.';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erros[] = 'Informe um e-mail válido.';
}

if (!in_array($assunto, $assuntosPermitidos, true)) {
    $erros[] = 'Selecione um assunto válido.';
}

if ($mensagem === '' || mb_strlen($mensagem) < 5) {
    $erros[] = 'Informe uma mensagem.';
}

if ($erros !== []) {
    http_response_code(422);
    echo '<!DOCTYPE html>';
    echo '<html lang="pt-BR"><head><meta charset="UTF-8"><title>VERSA | Erro</title></head>';
    echo '<body>';
    echo '<main>';
    echo '<h1>Não foi possível enviar a mensagem</h1>';
    echo '<ul>';

    foreach ($erros as $erro) {
        echo '<li>' . htmlspecialchars($erro, ENT_QUOTES, 'UTF-8') . '</li>';
    }

    echo '</ul>';
    echo '<p><a href="../frontend/index.html#contato">Voltar ao formulário</a></p>';
    echo '</main>';
    echo '</body></html>';
    exit;
}

echo '<!DOCTYPE html>';
echo '<html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
echo '<title>VERSA | Mensagem recebida</title></head>';
echo '<body>';
echo '<main>';
echo '<h1>Mensagem recebida!</h1>';
echo '<p>Obrigada, ' . htmlspecialchars($nome, ENT_QUOTES, 'UTF-8') . '.</p>';
echo '<p>Seu contato foi validado com sucesso e está pronto para ser tratado pela equipe VERSA.</p>';
echo '<p><a href="../frontend/index.html">Voltar para a VERSA</a></p>';
echo '</main>';
echo '</body></html>';
