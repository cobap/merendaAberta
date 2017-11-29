<template>
  <div class="hello"> 
    
          <md-layout md-gutter class="grafico">
                <!-- 1°GRAFICO -->
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-doughnut-custom :data="totalTipoGestao">
                      </grafico-doughnut-custom>
                    </md-whiteframe>
                  </span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-doughnut-custom :data="escolasSubprefeitura">
                      </grafico-doughnut-custom>
                    </md-whiteframe>
                  </span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-barra-custom :data="regiaoPorTipoGestao">
                      </grafico-barra-custom>
                    </md-whiteframe>
                  </span>
                </md-layout>
          </md-layout>
          <!-- 3°GRAFICO -->
          <md-layout md-gutter class="grafico">
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-barra-custom :data="regiaoPorMista">
                      </grafico-barra-custom>
                    </md-whiteframe>
                  </span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-barra-custom :data="regiaoPorTerceirizada">
                      </grafico-barra-custom>
                    </md-whiteframe>
                  </span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-barra-custom :data="regiaoPorDireta">
                      </grafico-barra-custom>
                    </md-whiteframe>
                  </span>
                </md-layout>
           </md-layout>
  </div>
</template>

<!-- Good Resource of Material Design Pallette https://www.materialpalette.com/pink/light-blue -->

<script> 
  import GraficoLinha from './grafico/GraficoLinha.vue'
  import GraficoBarra from './grafico/GraficoBarra.vue'
  import GraficoLinhaCustom from './grafico/GraficoLinhaCustom.vue'
  import GraficoBarraCustom from './grafico/GraficoBarraCustom.vue'
  import GraficoDoughnutCustom from './grafico/GraficoDoughnutCustom.vue'
  import GraficoPolarCustom from './grafico/GraficoPolarCustom.vue'
  import GraficoPolar from './grafico/GraficoPolar.vue'
  import GraficoDoughnut from './grafico/GraficoDoughnut.vue'
  import GraficoRadar from './grafico/GraficoRadar.vue'
  import axios from 'axios'
  
  var randomScalingFactor = function() {
          return Math.round(Math.random() * 100);
  };
  var chartColors = window.chartColors;
  var color = Chart.helpers.color;
  export default {
    name: 'HelloWorld',
    components: {
      GraficoLinha,
      GraficoBarra,
      GraficoLinhaCustom,
      GraficoBarraCustom,
      GraficoDoughnutCustom,
      GraficoPolarCustom,
      GraficoPolar,
      GraficoDoughnut,
      GraficoRadar,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      methods:  {
        geraGraficos(){
                axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/subprefeitura/`).then(response => {
        const subPref = response.data
        const siglaSubPref = subPref.map(el => {
          return el.siglaSubPref
        })

        const idhm = subPref.map(el => {
          return el.idhm
        })      
      })
      axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/zona/`).then(response => {
        const zona = response.data
        const siglaZona = zona.map(el => {
          return el.siglaZona
        })

        const nomeZona = zona.map(el => {
          return el.nomeZona
        })      
      })
      axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/escola/`).then(response => {
        const escola = response.data
        const tipoGestao = escola.map(el => {
          return el.tipoGestao
        })
        
        const tipoUnidade = escola.map(el => {
          return el.tipoUnidade
        })
        
        const nomeEscola = escola.map(el => {
          return el.nomeEscola
        })   
      
      })
      },
      totalTipoGestao: {
        labels: siglaSubPref,
        datasets: [
        {
          label: 'IDH médio',
          backgroundColor: '#f87979',
          data: idhm
        }
        ]
      },
        escolasSubprefeitura: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }]
        },
        dataPolarCustom: {
          datasets: [{
              data: [
                  randomScalingFactor(),
                  randomScalingFactor(),
                  randomScalingFactor(),
                  randomScalingFactor(),
                  randomScalingFactor(),
              ],
              backgroundColor: [
                  color('#C2185B').alpha(0.5).rgbString(),
                  color('#757575').alpha(0.5).rgbString(),
                  color('#03A9F4').alpha(0.5).rgbString(),
                  color('#212121').alpha(0.5).rgbString(),
                  color('#F8BBD0').alpha(0.5).rgbString(),
              ],
              label: 'My dataset' // for legend
          }],
          labels: [
              "Red",
              "Orange",
              "Yellow",
              "Green",
              "Blue"
          ]
        }
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
  /*opacity: 0.5;*/
}

</style>
