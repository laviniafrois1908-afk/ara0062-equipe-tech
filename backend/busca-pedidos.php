<?php
session_start();
header('Content-Type: application/json; charset=utf-8');
require_once 'config/conexao.php';

// Verifica se o utilizador está autenticado na sessão
if (!isset($_SESSION['usuario_id']) && isset($_GET['usuario_id'])) {
    $_SESSION['usuario_id'] = $_GET['usuario_id'];
}

if (!isset($_SESSION['usuario_id'])) {
    echo json_encode([
        'sucesso' => false, 
        'mensagem' => 'Utilizador não autenticado.'
    ]);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];

try {
    // Consulta os pedidos e os respetivos produtos do utilizador logado
    $sql = "SELECT p.id as pedido_id, p.data_pedido, p.total, pr.nome as produto_nome, pr.preco, pr.imagem 
            FROM pedidos p 
            LEFT JOIN itens_pedido ip ON p.id = ip.pedido_id 
            LEFT JOIN produtos pr ON ip.produto_id = pr.id 
            WHERE p.usuario_id = ?";
    
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("i", $usuario_id);
    $stmt->execute();
    $resultado = $stmt->get_result();

    $pedidos = [];
    while ($row = $resultado->fetch_assoc()) {
        $pedidos[] = $row;
    }

    echo json_encode([
        'sucesso' => true, 
        'pedidos' => $pedidos
    ]);

} catch (Exception $e) {
    echo json_encode([
        'sucesso' => false, 
        'mensagem' => 'Erro ao buscar pedidos: ' . $e->getMessage()
    ]);
}
?>