<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body {font-family: Arial, Helvetica, sans-serif;}
        * {box-sizing: border-box;}

        input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
        }

        input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        }

        input[type=submit]:hover {
        background-color: #45a049;
        }

        .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        }
    </style>
<x-navbar />
</head>
<body>
 <?php
 //session_start();
 ?>

 <h2>Registration form: Please fill-in the fields below.</h2>

    {{$errors}}

<form action="/signup" method="post" enctype="multipart/form-data"><!--Ajouter dans action le fichier php qui récupère les données du formulaire--><!--Point to self html: <php echo $_SERVER['PHP_SELF']; ?>-->

    {{ csrf_field() }}

    <div class="formfield">
        <label for="uname">Username: </label>
        <input type="text" name="username" id="uname" value="<?php //echo $_SESSION["username"] ?>">
        <p class="requiredField"> * </p>
        <p class="fieldMsg"><?php //echo $_SESSION["fieldMsg_Username"] ?></p>
    </div>
    <div class="formfield">
        <label for="pword">Password: </label>
        <input type="password" name="password" id="pword">
        <p class="requiredField"> * </p>
        <p class="fieldMsg"><?php //echo $_SESSION["fieldMsg_Password"] ?></p>
    </div>
    <div class="formfield">
        <label for="pwordconf">Repeat password: </label>
        <input type="password" name="password_confirmation" id="pwordconf">
        <p class="requiredField"> * </p>
        <p class="fieldMsg"><?php //echo $_SESSION["fieldMsg_PasswordRep"] ?></p>
    </div>
    <div class="formfield">
        <label for="mail">Email: </label>
        <input type="email" name="email" id="mail" value="<?php //echo $_SESSION["email"] ?>">
        <p class="requiredField"> * </p>
        <p class="fieldMsg"><?php //echo $_SESSION["fieldMsg_Email"] ?></p>
    </div>
    <div class="formfield">
        <input type="submit" name="submit" value="Submit"> 
    </div>
    <p>*: Required fields.</p>
    
</form>

</body>
</html>