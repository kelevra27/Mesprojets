<?php
include_once "elements/innit.php";

$pdoStat = $bdd->prepare("SELECT * FROM products WHERE id= :num");

$pdoStat->bindValue(':num', $_GET['modifProduct']);

$pdoStat->execute();

$productModif= $pdoStat->fetch();
?>

<h2>Modifier</h2>
<form action="productModif.php" method="post">
    <input type="hidden" name="modifProduct" value="<?= $productModif['id']?>">
    <div class="champs">
        <label for="name">Nom de l'album</label>
        <input type="text" id="name" name="name" value="<?= $productModif['name']?>" required> 
    </div>
    <div class="champs">
        <label for="description">description</label>
        <input type="text"  name="description"  value="<?= $productModif['description']?>" required> 
    </div>
    <div class="champs">
        <label for="price">prix</label>
        <input type="text"  name="price"  value="<?= $productModif['price']?>" required> 
    </div>
    <div class="champs">
        <label for="category_id">category id</label>
        <input type="text"  name="category_id"  value="<?= $productModif['category_id']?>" required> 
    </div>
    <div class="button">
        <button type="submit">Envoyer modif</button>
    </div>
</form>


<?php
include_once "elements/footer.php";