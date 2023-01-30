<?php
include_once "elements/header.php";

if(!isset($_SESSION["username"])){
    // var_dump($_SESSION);
   // header("Location: signin.php");
    exit(); 
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="./index.css" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@500&family=Open+Sans:ital,wght@1,500&family=Roboto:wght@300&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css" />
    <title>Acceuil</title>
</head>
<body>
        <div class="ABC">
        <h1>Bienvenue <?php echo $_SESSION['username']; ?>!</h1>
        <a href="logout.php">Déconnexion</a>
        </div>
        <div class ="row">
        <div class="col-2">
            <h1>Faites confiance aux meilleurs vendeurs de vyniles.</h1>
            <p>Numero 1 dans le monde,<br> La fnouk est LA boutique référence sur les vyniles. Nous vous attendons dans notre boutique sur Mars.</p>
        </div>
        <div class="col-2"><img src="Vynil page d'acceuil.png" alt="gros vynile">
        </div>
    </div><select name= "Catégories " onChange= "location.href= »+this.options[this.selectedIndex].value+ "; >
<option>Catégories</option>
<option value= »lien 1″>RAP</option>
<option value= »lien 2″>ROCK</option>
<option value= »lien 2″>POP</option>
</select>
            <section class="bestproduits">
                
                    <h3> BEST-SELLER:</h3>
                        <div class="container2">
                            
                        <div class="row">
                        <div class="col-3">
                        <img src="BBJ.png" alt="BBQEUJ">
                        <h4>BBJacques-Poésie d'une pulsion</h4>
                        <p>1999$</p>
                        </div>
                        <div class="col-3">
                        <img src="SCH.jpg" alt="SCH">
                        <h4>SCH-A7</h4>
                        <p>19000$</p>
                        </div>
                        <div class="col-3">
                        <img src="Alpha.jpg" alt="Alpha">
                        <h4>Dondada Mixtape</h4>
                        <p>2500$</p>
                        </div>
                        </div>
                   
            </section>
    
  </body>
</html>

include_once "elements/footer.php";