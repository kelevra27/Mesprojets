<template>

  <div class="concerts" v-for="concert in concerts" v-bind:key="concert">
        <p> {{concert.name}}
        {{concert.price}}
        {{concert.date}}
        {{concert.place}}
        </p>
  </div>

</template>

<script>
export default {
  name: 'PageBase',
  data() {

    return {
    concerts: null
    }

    },
  mounted()
  {
    // JE GET MA DATA DE MON API DANS MA CONSOLE
    fetch("http://localhost:8000/concerts")
    .then(res => res.json())
    .then(data => this.concerts = data)
    .catch(err => console.log(err.message))
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.concerts {
display: flexbox;
justify-content: center;
color: black;

}
</style>
