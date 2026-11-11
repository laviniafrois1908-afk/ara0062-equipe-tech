<?php
session_start();
require_once 'config/conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    if (!empty($email) && !empty($senha)) {
        try {
            $sql = "SELECT * FROM usuarios WHERE email = :email";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario && password_verify($senha, $usuario['senha'])) {
                // Guarda os dados do utilizador na sessão do PHP
                $_SESSION['usuario_nome'] = $usuario['nome'];
                $_SESSION['usuario_email'] = $usuario['email'];

                echo "<script>alert('Bem-vindo de volta, " . addslashes($usuario['nome']) . "!'); window.location.href='../frontend/index.html';</script>";
            } else {
                echo "<script>alert('E-mail ou senha incorretos.'); window.history.back();</script>";
            }
        } catch (PDOException $e) {
            echo "Erro no login: " . $e->getMessage();
        }
    } else {
        echo "<script>alert('Preencha todos os campos.'); window.history.back();</script>";
    }
}
?>