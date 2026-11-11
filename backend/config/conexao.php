<?php
// Arquivo reservado para a conexão com o banco de dados.
<?php
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "projeto_versa";

try {
    // Cria a conexão PDO com o MySQL do XAMPP
    $pdo = new PDO("mysql:host=$host;dbname=$banco;charset=utf8", $usuario, $senha);
    
    // Configura o modo de erro para exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // echo "Conexão realizada com sucesso!";
} catch (PDOException $erro) {
    echo "Erro na conexão: " . $erro->getMessage();
}
?>