<?php
include_once "elements/innit.php";

$suppUser = $bdd->prepare("DELETE FROM users WHERE id=:num ");

$suppUser->bindValue(":num", $_GET['suppUser'], PDO::PARAM_INT);

$executeIsOk = $suppUser->execute();

if($executeIsOk){
    $message = "user supprimé avec succes.";
    header("Location: admin.php");
}else{
    $message = "echec suppression";
}
?>
<div>
    <h2>Suppression</h2>
    <p><?= $message ?></p>
</div>
