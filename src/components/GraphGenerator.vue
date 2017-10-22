<template>
  <div class="graphgenerator">

    <h2>Gerador de Gráfico</h2>

    <div class="field-group">
      <md-input-container class="select">
          <label for="first_variable">Variável 1</label>
          <md-select name="first_variable" id="first_variable" v-model="first_variable">
            <md-option value="fight_club">Variável 1</md-option>
          </md-select>
      </md-input-container>

      <md-input-container class="select">
          <label for="second_variable">Variável 2</label>
          <md-select name="second_variable" id="second_variable" v-model="second_variable">
            <md-option value="australia">Variável 2</md-option>
          </md-select>
      </md-input-container>

      <md-input-container class="select">
          <label for="graph_type">Tipo de Gráfico</label>
          <md-select name="graph_type" id="graph_type" v-model="graph_type">
            <md-option value="arial">Tipo de Gráfico</md-option>
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
export default {
  name: 'GraphGenerator',
  data: () => ({
    first_variable: '',
    second_variable: '',
    graph_type: '',
    dataset: [],
    labels: []
  }),
  computed: {
    isDisabled() {
      return true;
    }
  },
  methods: {
    generateGraph() {
      this.first_variable = '';
      this.second_variable = '';
      this.graph_type = '';

      this.labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho']
      this.dataset = [65, 59, 80, 81, 56, 55, 40]
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