<?php
include_once "elements/innit.php";

$pdoStat = $bdd->prepare("SELECT * FROM users WHERE id= :num");

$pdoStat->bindValue(':num', $_GET['modifUser']);

$pdoStat->execute();

$row = $pdoStat->fetch();

?>

<h2>Modifier</h2>
<form action="userModif.php" method="post">
    <input type="hidden" name="modifUser" value="<?= $row['id']?>">
    <div class="champs">
        <label for="username">Pseudo</label>
        <input type="text" id="username" name="username" value="<?= $row['username']?>" required> 
    </div>
    <div class="champs">
        <label for="mail">email</label>
        <input type="email"  name="email"  value="<?= $row['email']?>" required> 
    </div>
    <div class="champs">
        <p>Option administration</p>
        <input name="admin" type="radio" value="1" <?php echo ($row['admin']== '1') ?  "checked" : "" ;  ?>/> Admin
        <input name="admin" type="radio"  value="0" <?php echo ($row['admin']== '0') ?  "checked" : "" ;  ?>/> User</td></td>    
    </div>
    <div class="button">
        <button type="submit">Envoyer modif</button>
    </div>
</form>


<?php
include_once "elements/footer.php";

