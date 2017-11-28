<script>
var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
};

var chartColors = window.chartColors;
var color = Chart.helpers.color;
import { Doughnut } from 'vue-chartjs'
  export default {
    name: 'grafico-doughnut-custom',
    extends: Doughnut,
      mounted () {
        this.renderChart(
         this.data,
         {responsive: true, maintainAspectRatio: false})
      }
  }
</script>