<template>
    <div class="Global">
        <div class="ModifUser">
            
                <router-link to='/ModifUser'><button>Modifier infos</button></router-link>
            
        </div>
        <div class="ModifPost">
            
                <router-link to='/ModifPost'><button>Modifier Posts</button></router-link>
            
        </div>
    </div>


</template>
<style>
.ModifUser,
.ModifPost {

    vertical-align: top;
}

.ModifUser {
    width: 100%;
    float: right
}

.ModifPost {
    width: 100%;
    float: left
}

.Global button  {
    text-decoration: none;
    margin: 20px;
    background-color: #148AF8;
    border: 1px black;
    height: 60px;
    width: 80%;
    color: white;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size:25px

}
 button:hover {
    background-color: #1065b4;
    box-shadow: 5px 5px 0 rgb(163, 159, 159);
    cursor: pointer;
}


.Global {
    display:flex;
    margin:20px
   
}
</style>