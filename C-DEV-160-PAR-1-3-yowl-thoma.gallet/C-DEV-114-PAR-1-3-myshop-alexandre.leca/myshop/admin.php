<?php 
include_once "elements/innit.php";
include_once "elements/header.php";


$users = $bdd->prepare("SELECT * FROM users");
$users->execute();

?>
<head><link rel="stylesheet" href="css/admin.css"></head>
<h2>Liste des Utilisateurs</h2><span><a href="#listeAlbum">Liste des albums</a></span>
<div class="admin">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Pseudo</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>Supprimer</th>
                    <th>modifier</th>
                </tr>
            </thead>
            <tbody>
                <?php while($row = $users->fetch(PDO::FETCH_ASSOC)) : ?>
                    <tr>
                        <td>
                            <?php echo htmlspecialchars($row['id']); ?>
                        </td>
                        <td>
                            <?php echo htmlspecialchars($row['username']); ?>
                        </td>
                        <td>
                            <?php echo htmlspecialchars($row['email']); ?>
                        </td>
                        <td>
                            <?php if($row['admin']== 1){
                                echo htmlspecialchars("admin");
                            }else{
                                echo htmlspecialchars("user");
                            }
                             ?>
                        </td>
                        <td>
                            <a class="trash" href="userSupprime.php?suppUser=<?= $row["id"]?>"><img src="img/bin.png" alt=""></a>
                        </td>
                        <td>
                            <a class="edit" href="formModifUser.php?modifUser=<?= $row["id"]?>"><img src="img/edit.png" alt=""></a>
                        </td>
                    </tr>
                    <?php endwhile; ?>
            </tbody>
        </table>
</div>

<?php
include_once "products.php";
include_once "formProducts.php";
include_once "elements/footer.php";