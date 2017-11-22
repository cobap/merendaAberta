<template>
  <!-- <div class="hello">    

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
    </md-layout> -->

  <div class="hello">
    <md-toolbar>
          <h2 class="md-title">Merenda Aberta - Portal da Transparência</h2>
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
                  <span><md-whiteframe md-elevation="24" class='fade'><grafico-linha></grafico-linha></md-whiteframe></span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span><md-whiteframe md-elevation="24" class='fade'><grafico-barra></grafico-barra></md-whiteframe></span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-linha-custom :data="dataLineCustom">
                      </grafico-linha-custom>
                    </md-whiteframe>
                  </span>
                </md-layout>
              </md-layout>
              <md-layout md-gutter class="grafico">
                <md-layout md-flex="30">
                  <span><md-whiteframe md-elevation="24" class='fade'><grafico-polar></grafico-polar></md-whiteframe></span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span><md-whiteframe md-elevation="24" class='fade'><grafico-doughnut></grafico-doughnut></md-whiteframe></span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span><md-whiteframe md-elevation="24" class='fade'><grafico-radar></grafico-radar></md-whiteframe></span>
                </md-layout>
              </md-layout>
  </div>
</template>

<!-- Good Resource of Material Design Pallette https://www.materialpalette.com/pink/light-blue -->

<script> 
  import GraficoLinha from './grafico/GraficoLinha.vue'
  import GraficoBarra from './grafico/GraficoBarra.vue'
  import GraficoLinhaCustom from './grafico/GraficoLinhaCustom.vue'
  import GraficoPolar from './grafico/GraficoPolar.vue'
  import GraficoDoughnut from './grafico/GraficoDoughnut.vue'
  import GraficoRadar from './grafico/GraficoRadar.vue'
  export default {
    name: 'HelloWorld',
    components: {
      GraficoLinha,
      GraficoBarra,
      GraficoLinhaCustom,
      GraficoPolar,
      GraficoDoughnut,
      GraficoRadar,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        dataLineCustom: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }]
        }      

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
