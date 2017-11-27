<template>
  <div class="graphgenerator">

    <h2>Gerador de Gráfico</h2>

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
    labels: [],
    errors: [],
    idhm: [],
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
      this.labels = [];
      this.idhm = [];

      axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/subprefeitura/`)
        .then(response => {
          response.data.map(el => {
            this.subprefeituras.push({ sigla: el.siglaSubPref, nome: el.nomeSubPref });
            this.labels.push(el.siglaSubPref);
            this.idhm.push(el.idhm*100);
          });

          var ctx = document.getElementById("myChart");
          var mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
              datasets: [{
                    label: 'IDH Municipal*',
                    data: this.idhm,
                    type: 'line',
                    fill: false,
                    borderColor: "#90EE90",
                    backgroundColor: "#90EE90"
              }, /*{
                    label: 'Dataset 2',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    type: 'line',
                    fill: false,
                    borderColor: "#00b0b3",
                    backgroundColor: "#00b0b3"
                  }, */{
                    label: 'Gestão Direta',
                    data: [40, 0, 30, 100, 50],
                    borderColor: "#F0E68C",
                    backgroundColor: "#F0E68C"
                  }, {
                    label: 'Gestão Mista',
                    data: [23, 56, 4, 0, 74],
                    borderColor: "#DDA0DD",
                    backgroundColor: "#DDA0DD"
                  }, {
                    label: 'Gestão Terceirizada',
                    data: [20, 37, 19, 92, 10],
                    borderColor: "#FFA07A",
                    backgroundColor: "#FFA07A"
                  }, {
                    label: 'Total de gestões',
                    data: [23, 53, 68, 93, 2],
                    borderColor: "#87CEEB",
                    backgroundColor: "#87CEEB"
                  }],
              labels: this.labels
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