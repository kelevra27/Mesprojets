<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crete+Round&display=swap" rel="stylesheet"> 
<div class="inscr">
    <h1>Inscription :</h1>
    <form>
        <label>Nom </label>
        <input type="text" placeholder="..."/>
        <label>Email </label>
        <input type="text" placeholder="..."/>
         <label>Confirmez votre email </label>
        <input type="text" placeholder="..."/>
         <label>Mot de passe </label>
        <input type="text" placeholder="..."/>
         <label>Confirmez votre mdp </label>
        <input type="text" placeholder="..."/>
        <button name="Envoyer">Envoyer</button>
        </form>
</div>
<p>Vous avez déja un compte ? </p>
</template>
<style>

.inscr{
background-color: white;
margin:4%;

place-items: center;
border-radius:10px;
box-shadow: 5px 5px 0 rgb(179, 177, 177);
width:30%;
display:block;
margin-right: auto ;
margin-left: auto;


}
.inscr form{
    display: flex;
    flex-direction: column;
    place-items:center;
    
}
.inscr h1{
    display: center;
          font-family: 'Crete Round', serif;
        font-weight:bold

}
.inscr form input {
    width:45%;
    margin:8px;
    background-color: rgb(250, 247, 247);
    border: 1px solid black;
    border-radius: 10px;
    height: 20px;
    font-family: 'Montserrat', sans-serif;
    text-align:center;
    outline:1px solid black

   
}
.inscr form button {
    margin:10px;
    background-color: #148AF8;
    border: 1px black;
   height: 30px;
   width:20%;
   color: white;
   border-radius:10px;
       font-family: 'Montserrat', sans-serif;
}
.inscr form button:hover{
    background-color: #1065b4;
    box-shadow: 2px 2px 0 rgb(163, 159, 159);
    cursor: pointer;
}
.inscr form label{
        font-family: 'Montserrat', sans-serif;
        font-weight:bold
}
</style>