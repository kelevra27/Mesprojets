<template>

    <div class="AddPost">
        <form>

            <select name="Catégories">

                <label>Dans quelle catégories souhaitez vous publier?</label>
                <option value="jv">Jeux vidéos</option>
                <option value="fb">Football</option>
                <option value="fs">Film & séries</option>
                <option value="aut">Autre</option>
            </select>


            <input type="text" placeholder="Titre" name="Post.titre" v-model="TmpTitre" />

            <textarea type="text" placeholder="Contenu" name="Post.content" v-model="TmpContent" />
            <button @click="addPost">+</button>
        </form>
    </div>
    <div class="NewPost" v-for="Post in Posts" :key="Post">

            <h1> {{ Post.titre }}</h1>

            <p>{{ Post.content }}</p>

           

        </div>
</template>
<script>
export default {
    data() {
        return {
            TmpTitre: "",
            TmpContent: "",
            Posts: []
        }
    },
    methods: {
        addPost(){
            this.Posts.push({ titre: this.TmpTitre, content: this.TmpContent })
        }
    }
}



</script>
<style>
.AddPost {
    background-color: white;
    margin: auto;
    margin-top: 8%;

    place-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 0 rgb(179, 177, 177);
    width: 30%;
    display: block;
    margin-right: auto;
    margin-left: auto;
}

.AddPost form {
    display: flex;
    flex-direction: column;
    place-items: left;


}

.AddPost form input {
    width: 45%;
    margin: 5px;
    background-color: rgb(250, 247, 247);
    border: 1px solid black;
    border-radius: 10px;
    height: 20px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    outline: 1px solid black
}

.AddPost form textarea {
    width: 96%;
    margin: 5px;
    background-color: rgb(250, 247, 247);
    border: 1px solid black;
    border-radius: 10px;
    height: 110px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    outline: 1px solid black
}

.AddPost form select {
    margin: 10px;
    background-color: #148AF8;
    border: 1px black;
    height: 30px;
    width: 30%;
    color: white;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    ;
    text-align: center
}

.AddPost form button {
    margin: 10px;
    background-color: #148AF8;
    border: 1px black;
    height: 60px;
    width: 25%;
    color: white;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 3em;

}

.AddPost form button:hover {
    background-color: #1065b4;
    box-shadow: 5px 5px 0 rgb(163, 159, 159);
    cursor: pointer;
}
</style>