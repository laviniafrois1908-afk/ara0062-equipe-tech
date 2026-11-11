<?php
require_once 'config/conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    if (!empty($nome) && !empty($email) && !empty($senha)) {
        try {
            //Criptografa a senha para segurança
            $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

            $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':senha', $senhaHash);
            $stmt->execute();

            echo "<script>alert('Conta criada com sucesso!'); window.location.href='../frontend/index.html';</script>";
        } catch (PDOException $e) {
            echo "<script>alert('Erro: Este e-mail já está cadastrado.'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Preencha todos os campos.'); window.history.back();</script>";
    }
}
?>