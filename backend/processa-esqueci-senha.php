<?php
require_once 'config/conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';

    if (!empty($email)) {
        try {
            $sql = "SELECT * FROM usuarios WHERE email = :email";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario) {
                // Em um ambiente de produção, aqui enviaria o e-mail com o link de redefinição.
                echo "<script>alert('Instruções de recuperação enviadas para o seu e-mail!'); window.location.href='../frontend/index.html';</script>";
            } else {
                echo "<script>alert('Este e-mail não está cadastrado no sistema.'); window.history.back();</script>";
            }
        } catch (PDOException $e) {
            echo "Erro: " . $e->getMessage();
        }
    } else {
        echo "<script>alert('Por favor, informe o e-mail.'); window.history.back();</script>";
    }
}
?>