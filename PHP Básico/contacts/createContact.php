<?php

require_once('./includes/connection.php');

function test_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$connection->select_db('contacts');

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $lastname = test_input($_POST["lastname"]);
    $email = test_input($_POST["email"]);
    $phone = test_input($_POST["phone"]);
    
    $values = '"' . $name . '","' . $lastname . '","' . $email . '","' . $phone . '"';

    $sql = "INSERT INTO contact (name, lastname, email, phone) VALUES (" . $values . ")";

    if($connection->query($sql)) {
        echo "Contato criado com sucesso. <br>";
        
        header("Location: /contacts");
        
    } else {
        echo "Erro na criação do contato: " . $connection->error;
    }
    
    $connection->close();

}

