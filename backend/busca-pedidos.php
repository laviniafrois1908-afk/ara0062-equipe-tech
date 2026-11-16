<?php
session_start();
require_once 'config/conexao.php';
header('Content-Type: application/json');

if (!isset($_SESSION['usuario_email'])) {
    echo json_encode(['logado' => false]);
    exit;
}

$email = $_SESSION['usuario_email'];

try {
    // Busca os dados cadastrais do utilizador
    $stmtUser = $pdo->prepare("SELECT nome, email FROM usuarios WHERE email = ?");
    $stmtUser->execute([$email]);
    $usuario = $stmtUser->fetch(PDO::FETCH_ASSOC);

    // Busca os pedidos associados a este email
    $stmtPedidos = $pdo->prepare("SELECT * FROM pedidos WHERE usuario_email = ? ORDER BY data_pedido DESC");
    $stmtPedidos->execute([$email]);
    $pedidos = $stmtPedidos->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'logado' => true,
        'nome' => $usuario['nome'] ?? ($_SESSION['usuario_nome'] ?? 'Cliente VERSA'),
        'email' => $email,
        'pedidos' => $pedidos
    ]);
} catch (PDOException $e) {
    echo json_encode(['logado' => false, 'erro' => $e->getMessage()]);
}
?>