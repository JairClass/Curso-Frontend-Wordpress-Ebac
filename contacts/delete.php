<?php
require_once('./includes/connection.php');

$id = $_GET['id'];

$connection->select_db('contacts');

$sql = "DELETE FROM contact where id = " . $id;

if($connection->query($sql)) {
 
    header("Location: /contacts");
    
} else {

}