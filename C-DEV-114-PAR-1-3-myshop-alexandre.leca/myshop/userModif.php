<?php
include_once "elements/innit.php";
include_once "elements/header.php";

$pdoStat = $bdd->prepare("UPDATE users set username= :username, email= :email, admin = :admin WHERE id = :num;");
$pdoStat->bindValue(':num', $_POST['modifUser']);
$pdoStat->bindValue(':username', $_POST['username']);
$pdoStat->bindValue(':email', $_POST['email']);
$pdoStat->bindValue(':admin', $_POST['admin']);

$pdoStat->execute();

header("Location: admin.php" );

