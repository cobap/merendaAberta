<template>
  <div class="hello"> 
          <md-layout md-gutter class="grafico">
                <!-- 1°GRAFICO -->
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico1></grafico1>
                    </md-whiteframe>
                  </span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico2></grafico2>                      
                    </md-whiteframe>
                  </span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-barra-custom :data="dataBarCustom">
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
                      <grafico-barra></grafico-barra>
                    </md-whiteframe>
                  </span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-barra-custom :data="dataBarCustom">
                      </grafico-barra-custom>
                    </md-whiteframe>
                  </span>
                </md-layout>
                <md-layout md-flex="5"><span></span></md-layout>
                <md-layout md-flex="30">
                  <span>
                    <md-whiteframe md-elevation="24" class='fade'>
                      <grafico-barra-custom :data="dataBarCustom">
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
  import Grafico1 from './grafico/Grafico1.vue'
  import Grafico2 from './grafico/Grafico2.vue'
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
      Grafico1,
      Grafico2,
      GraficoBarra,
      GraficoLinhaCustom,
      GraficoBarraCustom,
      GraficoDoughnutCustom,
      GraficoPolarCustom,
      GraficoPolar,
      GraficoDoughnut,
      GraficoRadar,
    },
    data: {
      subprefeituras: [],
      idhm: [],
      siglas: []
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        dataBarCustom: {
          // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          labels: this.siglas,
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 39, 10, 40, 39, 80, 40]
            }
          ]
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
    },
    mounted(){

      this.subprefeituras = [];
      this.siglas = []
      var labels = [];
      this.idhm = [];
      var direta = [];
      var mista = [];
      var terceirizada = [];
      var totalGestao = [];

      axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/subprefeitura/`)
        .then(response => {
          response.data.map(el => {
            this.subprefeituras.push({ sigla: el.siglaSubPref, nome: el.nomeSubPref });
            this.siglas.push(el.siglaSubPref)
            labels.push(el.siglaSubPref);
            this.idhm.push(el.idhm*100);
            direta.push(el.direta);
            mista.push(el.mista);
            terceirizada.push(el.terceirizada);
            totalGestao.push(el.totalGestao);
          }); 

          console.log(this.siglas)

      })
      
      axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/zona/`).then(response => {
        this.zona = response.data
        this.siglaZona = this.zona.map(el => {
          return el.siglaZona
        })

        this.nomeZona = this.zona.map(el => {
          return el.nomeZona
        })      
      })
      axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/escola/`).then(response => {
        this.escola = response.data
        this.tipoGestao = this.escola.map(el => {
          return el.tipoGestao
        })
        
        this.tipoUnidade = this.escola.map(el => {
          return el.tipoUnidade
        })
        
        this.nomeEscola = this.escola.map(el => {
          return el.tipoUnidade
        })   
      
      })
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
