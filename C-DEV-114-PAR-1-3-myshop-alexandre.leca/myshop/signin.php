<?php
include "sessionstart.php";
include_once "elements/innit.php";
include_once "elements/header.php";


if ((isset($_POST['username'])) && (isset($_POST['password']))) {
    $username = ($_POST['username']);
    $password = crypt($POST['password'], '$5$rounds=5000$Z4DE5F7GF9ETF8GYEV8F9PBgouFveuyifbyà7989$');
    // var_dump($username, $password);
    $sth = $bdd->prepare("SELECT username, password, admin FROM users WHERE username = :username and password = :password ");
    $sth->bindValue('username', $username);
    $sth->bindValue('password', $password);
    $sth->execute();
    $row = $sth->fetch();
    var_dump($row['admin']);
    // $rows()
    if ($row["admin"] == 0) {
        $_SESSION['username'] = $username;
        header("Location: index.php");
    } 
    elseif($row["admin"] == 1){
        $_SESSION['username'] = $username;
        header("location: admin.php");
    }
    else {
        $message = "Le nom d'utilisateur ou le mot de passe est incorrect.";
    }
    var_dump("bouffon");
}
?>



<head>
    <link rel="stylesheet" href="signin.css" />
</head>


    <form class="box" method="post" name="login">
        <h1 class="box-logo box-title">
            <h1 class="box-title">Connexion</h1>
            <input type="text" class="box-input" name="username" placeholder="Nom d'utilisateur">
            <input type="password" class="box-input" name="password" placeholder="Mot de passe">
            <input type="submit" value="Connexion " name="submit" class="box-button">
            <p class="box-register">Vous êtes nouveau ici? <a href="signup.php">S'inscrire</a></p>
            <?php if (!empty($message)) { ?>
                <p class="errorMessage"><?php echo $message; ?></p>
            <?php } ?>
    </form>

