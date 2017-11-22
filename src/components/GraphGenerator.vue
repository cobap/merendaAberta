<template>
  <div class="graphgenerator">

    <h2>Gerador de Gráfico</h2>

    <div class="field-group">
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
    </div>

    <md-button class="md-raised md-primary" @click="generateGraph">Gerar gráfico</md-button>

    <div class="chart-custom">
      <chartjs-line :datalabel="'Valor'" :labels="labels" :data="dataset" :bind="true"></chartjs-line>
    </div>
    <div class="chart-custom">
      <chartjs-bar :datalabel="'Valor'" :labels="labels" :data="dataset" :bind="true"></chartjs-bar>
    </div> 

  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'GraphGenerator',
  data: () => ({
    first_variable: '',
    second_variable: '',
    graph_type: '',
    dataset: [],
    labels: [],
    data: [],
    errors: [],
    variables: [
      { name: "Zona", value: "zona" }, 
      { name: "Subprefeitura", value: "subprefeitura" },
      { name: "Escolas", value: "escola" }
    ],
    graph_types: [
      { name: "Gráfico em barras", value: "bar" },
      { name: "Gráfico de linhas", value: "line" }
    ],
    data1: [],
    data2: [],
    label1: [],
    label2: []
  }),
  computed: {
    isDisabled() {
      return true;
    }
  },
  methods: {
    generateGraph() {
      this.labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho']
      this.dataset = [65, 59, 80, 81, 56, 55, 40]

      axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/${this.first_variable}/`)
        .then(response => {
          this.data = response.data
          console.log(this.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
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

.field-group {
  width: 100%;
  display: flex;
}

.select {
  padding: 10px;
  margin: 2% 5% 2% 5%;
}

.chart-custom {
  width: 60%;
  height: 60%;
  display: block;
  margin: auto;
  padding: 50px 0 50px 0;
}

</style>