<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@500&family=Open+Sans:ital,wght@1,500&family=Roboto:wght@300&family=Square+Peg&display=swap"
        rel="stylesheet">
    <div class="Nav">


        <ul class="menu">

            <img src="@/assets/menu.png" alt="menu">
            <li>

                <router-link to="/">HOME</router-link>
            </li>
            <li>
                <router-link to='/inscription'>INSCRIPTION</router-link>
            </li>
            <h1>Reréddit</h1>
            <button><router-link to='/SignIn'>Connexion</router-link></button> 
        </ul>


    </div>

</template>

<script>
export default {
    name: "MyNavbar"
}
</script>

<style>
body {
    background-color: #C8C5C5;
    margin: 0;
    height:10%;
}

.Nav {
    background-color: rgb(48, 47, 47);
           

    






}

.menu {
    display: flex;
    padding: 0;
    align-items: center;
    margin: 0%;


}

.menu li {
    list-style-type: none;

}

.menu a {
    display: block;
    min-width: 120px;
    color: white;
    text-decoration: none;



}

.menu button {
    position: absolute;
    right: 3%;
    background-color: #148AF8;
    color: white;
    border: 1px solid black;
    height: 8%;
    width: 10%;
    border-radius: 10px;
    font-size: 1.2em;
    min-width: 120px;
}

.menu li:hover {
    background-color: black;
    height: 20px;
    widows: 100%;
    border-radius: 10px;
}

.menu h1 {
   margin-left:23%;

    
   

    font-family: 'Square Peg', cursive;
    color: white;
    font-weight: bold;

}

.menu button:hover {
    background-color: #1065b4;
    box-shadow: 5px 5px 0 black;
    cursor: pointer;
}
</style>
