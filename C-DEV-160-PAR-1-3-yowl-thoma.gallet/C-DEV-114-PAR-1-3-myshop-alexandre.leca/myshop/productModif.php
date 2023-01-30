<?php
include_once "elements/innit.php";

$pdoStat = $bdd->prepare("UPDATE products set name= :name, price = :price, category_id = :category_id, description = :description WHERE id = :num");
$pdoStat->bindValue(':num', $_POST['modifProduct']);
$pdoStat->bindValue(':name', $_POST['name']);
$pdoStat->bindValue(':price', $_POST['price']);
$pdoStat->bindValue(':category_id', $_POST['category_id']);
$pdoStat->bindValue(':description', $_POST['description']);

$pdoStat->execute();

header("Location: admin.php");