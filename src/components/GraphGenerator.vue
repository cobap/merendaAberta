<template>
  <div class="graphgenerator">

    <h2>Monte seu Gráfico</h2>

    <p>Para personalizar o gráfico gerado, clique nas abas das variáveis (localizadas acima do gráfico) para remover ou adicionar.</p>

    <!--<div class="field-group">
      <md-input-container class="select">
          <label for="first_variable">Variável 1</label>
          <md-select name="first_variable" id="first_variable" v-model="first_variable">
            <md-option v-for="variable in variables" v-bind:value="variable.value" :key="variable.value">{{ variable.name }}</md-option>
          </md-select>
      </md-input-container>

      <md-input-container class="select">
          <label for="second_variable">Variável 2</label>
          <md-select name="second_variable" id="second_variable" v-model="second_variable">
            <md-option v-for="variable in variables" v-bind:value="variable.value" :key="variable.value">{{ variable.name }}</md-option>
          </md-select>
      </md-input-container>

      <md-input-container class="select">
          <label for="graph_type">Tipo de Gráfico</label>
          <md-select name="graph_type" id="graph_type" v-model="graph_type">
            <md-option v-for="graph_type in graph_types" v-bind:value="graph_type.value" :key="graph_type.value">{{ graph_type.name }}</md-option>
          </md-select>
      </md-input-container>
    </div> -->

    <md-button class="md-raised md-primary" @click="generateGraph">Gerar gráfico</md-button>

    <div class="chart-size">
      <canvas id="myChart"></canvas>
    </div>

    <div v-if="show == true">
      <h4 class="subprefeituras">Legenda:
        <p v-for="subprefeitura in subprefeituras" :key="subprefeitura.sigla">
          {{ subprefeitura.sigla }}: {{ subprefeitura.nome }}
        </p>
      </h4>
      <p class="legenda">*O valor do IDH foi multiplicado por 100 para melhor visualização.</p>
    </div>

  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'GraphGenerator',
  data: () => ({
    /*first_variable: '',
    second_variable: '',
    graph_type: '',*/
    errors: [],
    show: false,
    subprefeituras: []
  }),
  computed: {
    isDisabled() {
      return true;
    }
  },
  methods: {
    generateGraph() {
      this.subprefeituras = [];
      var labels = [];
      var idhm = [];
      var direta = [];
      var mista = [];
      var terceirizada = [];
      var totalGestao = [];

      axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/subprefeitura/`)
        .then(response => {
          response.data.map(el => {
            this.subprefeituras.push({ sigla: el.siglaSubPref, nome: el.nomeSubPref });
            labels.push(el.siglaSubPref);
            idhm.push(el.idhm*100);
            direta.push(el.direta);
            mista.push(el.mista);
            terceirizada.push(el.terceirizada);
            totalGestao.push(el.totalGestao);
          });

          var ctx = document.getElementById("myChart");
          var mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
              datasets: [{
                    label: 'IDH Municipal*',
                    data: idhm,
                    type: 'line',
                    fill: false,
                    borderColor: "#90EE90",
                    backgroundColor: "#90EE90"
              }, {
                    label: 'Gestão Direta',
                    data: direta,
                    borderColor: "#F0E68C",
                    backgroundColor: "#F0E68C"
                  }, {
                    label: 'Gestão Mista',
                    data: mista,
                    borderColor: "#DDA0DD",
                    backgroundColor: "#DDA0DD"
                  }, {
                    label: 'Gestão Terceirizada',
                    data: terceirizada,
                    borderColor: "#FFA07A",
                    backgroundColor: "#FFA07A"
                  }, {
                    label: 'Total de gestões',
                    data: totalGestao,
                    borderColor: "#87CEEB",
                    backgroundColor: "#87CEEB"
                  }],
              labels: labels
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
          });

          this.show = true;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2, p {
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
}

.subprefeituras {
  text-align: left;
  padding: 10px 5% 0 15%;
  column-count: 4;
}

.legenda {
  text-align: left;
  padding: 0 5% 100px 15%;
}

.field-group {
  width: 100%;
  display: flex;
}

.select {
  padding: 10px;
  margin: 2% 5% 2% 5%;
}

.chart-size {
  width: 60%;
  height: 60%;
  margin: auto;
  padding: 50px 0 50px 0;
}

</style>