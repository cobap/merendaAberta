<template>
  <div class="hello">    

    <md-layout md-gutter class="grafico">
      <md-layout md-flex="30">
        <span><md-whiteframe md-elevation="24" class='fade'><img src="../assets/histograma.png"></md-whiteframe></span>
      </md-layout>
      <md-layout md-flex="5"><span></span></md-layout>
      <md-layout md-flex="30">
        <span><md-whiteframe md-elevation="24" class='fade'><img src="../assets/boxplot.png"></md-whiteframe></span>
      </md-layout>
      <md-layout md-flex="5"><span></span></md-layout>
      <md-layout md-flex="30">
        <span><md-whiteframe md-elevation="24" class='fade'><img src="../assets/correlacao.png"></md-whiteframe></span>
      </md-layout>
    </md-layout>
    <md-layout md-gutter class="grafico">
      <md-layout md-flex="30">
        <span><md-whiteframe md-elevation="24" class='fade'><img src="../assets/kmeans.png"></md-whiteframe></span>
      </md-layout>
      <md-layout md-flex="5"><span></span></md-layout>
      <md-layout md-flex="30">
        <span><md-whiteframe md-elevation="24" class='fade'><img src="../assets/regressaolinear.jpg"></md-whiteframe></span>
      </md-layout>
      <md-layout md-flex="5"><span></span></md-layout>
      <md-layout md-flex="30">
        <span><md-whiteframe md-elevation="24" class='fade'><img src="../assets/regressaologistica.jpg"></md-whiteframe></span>
      </md-layout>
    </md-layout>

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.grafico {
  margin-top: 5px;
  margin-bottom: 20px;
}

.fade {
   opacity: 1;
   transition: opacity .25s ease-in-out;
   -moz-transition: opacity .25s ease-in-out;
   -webkit-transition: opacity .25s ease-in-out;
   }

.fade:hover {
  opacity: 0.5;
}

</style>
