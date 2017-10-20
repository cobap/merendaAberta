<template>
  <div class="hello">
    <md-toolbar>
      <md-menu md-align-trigger md-size="4">
        <md-button md-menu-trigger>
          <md-icon>menu</md-icon>
        </md-button>
        <md-menu-content>
          <router-link tag="md-menu-item" to="/">Início</router-link>
          <router-link tag="md-menu-item" to="/graph">Gerador de Gráfico</router-link>
        </md-menu-content>
      </md-menu>
      <router-link tag="md-button" to="/" class="md-title">Merenda Aberta - Portal da Transparência</router-link>
      <span style="flex: 1"></span>
      <md-button class="md-icon-button">
        <md-icon>explore</md-icon>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>help outline</md-icon>
      </md-button>
    </md-toolbar>

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

.md-title {
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  text-transform: none;
}

</style>
