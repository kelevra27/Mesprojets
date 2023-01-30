<?php

$products = $bdd->prepare("SELECT * FROM products");
$products->execute();

?>
<head><link rel="stylesheet" href="css/products.css"></head>
<h2 id="listeAlbum">Liste des Albums</h2>
<div class="products">
<table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom album</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Category_id</th>
                <th>Supprimer</th>
                <th>Modifier</th>
            </tr>
        </thead>
        <tbody>
            <?php while($product = $products->fetch(PDO::FETCH_ASSOC)) : ?>
                <tr>
                    <td>
                        <?php echo htmlspecialchars($product['id']); ?>
                    </td>

                    <td>
                        <?php echo htmlspecialchars($product['name']); ?>
                    </td>
                    <td>
                        <?php echo htmlspecialchars($product['description']); ?>
                    </td>
                    <td>
                        <?php echo htmlspecialchars($product['price'].€); ?>
                    </td>
                    <td>
                        <?php echo htmlspecialchars($product['category_id']); ?>
                    </td>
                    
                    <td>
                        <a class="trash" href="productSupprime.php?suppProduct=<?= $product["id"]?>"><img src="img/bin.png" alt=""></a>
                    </td>
                    <td>
                        <a class="edit" href="formRemoveProduct.php?modifProduct=<?= $product["id"]?>"><img src="img/edit.png" alt=""></a>
                    </td>
                </tr>
                <?php endwhile; ?>
        </tbody>
    </table>
</div>