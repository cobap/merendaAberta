<template>
  <div id="app">

    <md-toolbar>
      <md-menu md-align-trigger md-size="4">
        <md-button md-menu-trigger>
          <md-icon>menu</md-icon>
        </md-button>
        <md-menu-content>
          <router-link tag="md-menu-item" to="/">Início</router-link>
          <router-link tag="md-menu-item" to="/graph">Monte seu Gráfico</router-link>
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

    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.md-theme-default.md-toolbar {
  margin-bottom: 30px; 
}

.md-title {
  text-transform: none;
}
</style>
