<?php 
include "elements/innit.php";

$suppProduct = $bdd->prepare("DELETE FROM products WHERE id=:num");

$suppProduct->bindValue(":num", $_GET['suppProduct'], PDO::PARAM_INT);

$executeIsOk = $suppProduct->execute();

if($executeIsOk){
    $message = "product supprimé avec succes.";
    header("Location: admin.php");
}else{
    $message = "echec suppression";
}
?>
<div>
    <h2>Suppression</h2>
    <p><?= $message ?></p>
</div>

