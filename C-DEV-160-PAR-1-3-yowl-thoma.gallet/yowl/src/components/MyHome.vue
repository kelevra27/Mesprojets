<template>

    <div class="Post">
        <h3>{{article[1].title}}</h3>
        {{article[1].content}}
        {{article[1].created_at}}
   </div>
    <div class="AddPostb">
<router-link to='/AddPost'><button >+</button></router-link>
</div>

</template>

<script>
export default {
    name: "MyHome",
    data() {
        return {
            article: [{title : "toto", content : "mon contenu", created_at: Date.now()}, {title : "tata", content : "mon contenu", created_at: Date.now()}]
        }
    }
}
</script>

<style>
.Post {
     background-color: white;
    margin: auto;
    margin-top: 8%;

    place-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 0 rgb(179, 177, 177);
    width: 60%;
    height: 200px;
    display: block;
    margin-right: auto;
    margin-left: auto;
}
.AddPostb button{
margin:10px;
    background-color: #148AF8;
    border: 1px black;
   height: 60px;
   width:5%;
   color: white;
   border-radius:10px;
       font-family: 'Montserrat', sans-serif;
       font-size: 3em;
       position : fixed;
bottom :30px;
right : 30px;

       }
       .AddPostb button:hover {
    background-color: #1065b4;
    box-shadow: 5px 5px 0 rgb(163, 159, 159);
    cursor: pointer;
}
       
</style>