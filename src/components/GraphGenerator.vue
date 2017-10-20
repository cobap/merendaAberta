<template>
  <div class="graphgenerator">
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

    <h2>Gerador de Gráfico</h2>

    <p>Alguma explicação sobre o que é esta função dentro do site para informar e guiar os usuários.</p>

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

    <div id="chart"></div>
  </div>
</template>


<script>
export default {
  name: 'GraphGenerator',
  data: () => ({
    first_variable: '',
    second_variable: '',
    graph_type: ''
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

      var data = [30, 86, 168, 281, 303, 365];

      var d3 = require("d3");

      d3.select("#chart")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", function(d) { return d + "px"; })
        .text(function(d) { return d; });
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-theme-default :not(input):not(textarea)::selection {
  background: lightgray;
}

.md-toolbar {
  background-color: black;
  margin-bottom: 30px;
}

h1, h2 {
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

.md-title {
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  text-transform: none;
}

#chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}

</style>