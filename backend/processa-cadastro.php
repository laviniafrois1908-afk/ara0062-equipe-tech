<?php
session_start();
require_once 'config/conexao.php';
header('Content-Type: application/json');

$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$endereco = $_POST['endereco'] ?? '';

if (empty($nome) || empty($email) || empty($senha)) {
    echo json_encode(['sucesso' => false, 'mensagem' => 'Preencha todos os campos obrigatórios.']);
    exit;
}

try {
    $stmtCheck = $pdo->prepare("SELECT id FROM usuarios WHERE email = ?");
    $stmtCheck->execute([$email]);
    if ($stmtCheck->rowCount() > 0) {
        echo json_encode(['sucesso' => false, 'mensagem' => 'Este e-mail já está registado.']);
        exit;
    }

    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, senha, telefone, endereco) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$nome, $email, $senhaHash, $telefone, $endereco]);

    $_SESSION['usuario_email'] = $email;
    $_SESSION['usuario_nome'] = $nome;

    echo json_encode(['sucesso' => true, 'mensagem' => 'Conta criada com sucesso!']);
} catch (PDOException $e) {
    echo json_encode(['sucesso' => false, 'mensagem' => 'Erro ao criar conta: ' . $e->getMessage()]);
}
?>