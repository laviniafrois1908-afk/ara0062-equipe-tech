<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['usuario_email'])) {
    echo json_encode([
        'logado' => true,
        'nome' => $_SESSION['usuario_nome'],
        'email' => $_SESSION['usuario_email']
    ]);
} else {
    echo json_encode(['logado' => false]);
}
?>