<?php
session_start();
require_once 'config/conexao.php';
header('Content-Type: application/json');

if (!isset($_SESSION['usuario_email'])) {
    echo json_encode(['sucesso' => false, 'mensagem' => 'Utilizador não autenticado.']);
    exit;
}

$email = $_SESSION['usuario_email'];
$total = $_POST['total'] ?? 0;

try {
    $stmt = $pdo->prepare("INSERT INTO pedidos (usuario_email, total, status) VALUES (?, ?, 'Pendente')");
    $stmt->execute([$email, $total]);
    
    echo json_encode(['sucesso' => true, 'mensagem' => 'Pedido registado com sucesso!']);
} catch (PDOException $e) {
    echo json_encode(['sucesso' => false, 'mensagem' => 'Erro ao processar pedido: ' . $e->getMessage()]);
}
?>