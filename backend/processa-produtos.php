<?php
header('Content-Type: application/json; charset=utf-8');

require_once 'config/conexao.php';

try {
    $sql = "SELECT id, nome, descricao, preco, categoria, imagem FROM produtos";
    $resultado = $conexao->query($sql);

    $produtos = [];

    if ($resultado && $resultado->num_rows > 0) {
        while ($row = $resultado->fetch_assoc()) {
            $produtos[] = $row;
        }
    }

    echo json_encode([
        'sucesso' => true,
        'produtos' => $produtos
    ]);

} catch (Exception $e) {
    echo json_encode([
        'sucesso' => false,
        'mensagem' => 'Erro ao carregar os produtos: ' . $e->getMessage()
    ]);
}
?>