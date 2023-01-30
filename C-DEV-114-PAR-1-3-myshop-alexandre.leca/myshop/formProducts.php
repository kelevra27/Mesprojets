<?php


if(isset($_POST)){
    $name = $_POST["name"];
    $description= $_POST["description"];
    $price = $_POST["price"];
    $category_id= $_POST["category_id"];

    $result = $bdd->prepare("INSERT INTO products(name, price, category_id, description) VALUES(:name, :price, :category_id, :description)");
    $result->execute(["name" => $name, "price" => $price, "category_id" => $category_id, "description" => $description]);

    //header("Location: admin.php");
}

?>
<head><link rel="stylesheet" href="css/formProducts.css"></head>
<form action="" method="post">
    <div class="champs">
        <label for="name">nom de l'album</label>
        <input type="text" id="name" name="name" placeholder="Entrez le nom de l'album" required>
    </div>
    <div class="champs">
        <label for="description">description</label>
        <input type="text" id="description" name="description" placeholder="entrer une bref description de l'album" required>
    </div>
    <div class="champs">
        <label for="price">price</label>
        <input type="text"  name="price" placeholder="Entrez le prix de l'album" required>
    </div>
    <div class="champs">
        <label for="category_id">categorie_id</label>
        <input type="text"  name="category_id" placeholder="Entrez l'id de la category" required>
    </div>
    <div class="button">
        <button type="submit">ajout d'un album</button>
    </div>
</form>

<?php
include_once "elements/footer.php";

