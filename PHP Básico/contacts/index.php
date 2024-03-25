<?php
$projeto = "Agenda de Contatos";
include('./includes/functions.php');
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <title><?php echo $projeto ?></title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f8f9fa;
        }

        .container {
            margin-top: 50px;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1,
        h2,
        h3 {
            color: #000;
        }

        form {
            background-color: #f1f1f1;
            padding: 20px;
            border-radius: 8px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        }

        input[type=text] {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }

        button:hover {
            background-color: #218838;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            padding: 10px;
            margin-top: 8px;
            background-color: #eeeeee;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1><?php echo $projeto ?></h1>
        <h2><?php echo boasVindas("Jair") ?></h2>

        <form action="./createContact.php" method="post">
            <input type="text" name="name" placeholder="Nome">
            <input type="text" name="lastname" placeholder="Sobrenome">
            <input type="text" name="email" placeholder="E-mail">
            <input type="text" name="phone" placeholder="Telefone">
            <button type="submit">Cadastrar</button>
        </form>

        <h3><?= $projeto ?></h3><!--  shorttag = tag curta -->

        <ul>
            <? include('./includes/listContacts.php') ?>
        </ul>
    </div>

    <!-- Scripts do Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>