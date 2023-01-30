<?php
include_once "elements/innit.php";
include_once "elements/header.php";


if($_POST){
    
    $verifPseudo = $bdd->prepare("SELECT * FROM users WHERE username = :username");
    $verifPseudo->bindValue(':username', $_POST['username']);
    $verifPseudo->execute();
    if($verifPseudo->rowCount() > 0){
        $erreurPseudo = "<p>Pseudo existant. saisir un nouveau.</p>";
        $error = true;
    }
    $verifEmail = $bdd->prepare("SELECT * FROM users WHERE email = :email"); 
    $verifEmail->bindValue(':email', $_POST['email']); 
    $verifEmail->execute(); 
    if($verifEmail->rowCount() > 0) 
    {
        $erreurEmail = "<p>Compte existant à cette adresse.</p>";
        $error = true;
    }
    if($email!== $verif_email){
        $erreurVerifEmail = "<p>Vérifiez les adresses mail</p>";
        $error = true;
    }

    if($password !== $verif_password){
        $erreurMdp = "<p>Vérifiez les mots de passe </p>";
        $error = true;
    }
}
if(!isset($error) && isset($_POST)){
    $username = $_POST["username"];
    $email = $_POST["email"];
    
    $password = crypt($POST['password'], '$5$rounds=5000$Z4DE5F7GF9ETF8GYEV8F9PBgouFveuyifbyà7989$');                                           

    $sth = $bdd->prepare("INSERT INTO users(username, password,email,admin) VALUES(:username, :password,:email,:admin)");
    $sth->execute(["username" => $username, "password" => $password, "email" => $email, "admin" => 0]);

    echo "<p>Inscription avec succes</p>";

    //header("Location: index.php");
}

?>
 <head>
    <link rel="stylesheet" href="css/signup.css">
</head>
<form action="" method="post">
    <div class="champs">

        <label for="username">Pseudo</label>
        <input type="text" id="username" name="username" placeholder="Entrez votre pseudo" required>
        <?php if(isset($erreurPseudo)) echo $erreurPseudo;?>
    </div>
    <div class="champs">
        <label for="mail">email</label>
        <input type="email"  name="email" placeholder="Entrez votre email" required>
        <?php if(isset($erreurEmail)) echo $erreurEmail; ?>
    </div>
    <div class="champs">
        <label for="verif_email">Verif_email</label>
        <input type="email"  name="verif_email" placeholder="retapez votre mail" required>
    </div>
    <div class="champs">
        <label for="password">PASSWORD</label>
        <input type="password"  name="password" placeholder="Entrez votre mot de passe" required>
    </div>
    <div class="champs">
        <label for="verif_password">Verif_password</label>
        <input type="password"  name="verif_password" placeholder="entrez a nouveu votre mot de passe" required>

    </div>
    <div class="button">
        <button type="submit">Envoyer le message</button>
    </div>
</form>

<?php
include_once "elements/footer.php";

