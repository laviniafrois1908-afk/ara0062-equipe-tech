<?php
header('Content-Type: application/json; charset=utf-8');
require_once 'config/conexao.php';

try {
    // Verifica se foi passada alguma categoria via GET (ex: processa-produtos.php?categoria=Blusas)
    if (isset($_GET['categoria']) && !empty($_GET['categoria'])) {
        $categoria = $_GET['categoria'];
        $stmt = $conexao->prepare("SELECT id, nome, descricao, preco, categoria, imagem FROM produtos WHERE categoria = ?");
        $stmt->bind_param("s", $categoria);
        $stmt->execute();
        $resultado = $stmt->get_result();
    } else {
        $sql = "SELECT id, nome, descricao, preco, categoria, imagem FROM produtos";
        $resultado = $conexao->query($sql);
    }

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
    http_response_code(500);
    echo json_encode([
        'sucesso' => false,
        'mensagem' => 'Erro ao buscar produtos: ' . $e->getMessage()
    ]);
}
?>