<script>
var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

var chartColors = window.chartColors;
var color = Chart.helpers.color;
import { PolarArea } from 'vue-chartjs'
  export default {
    name: 'grafico-polar-custom',
    extends: PolarArea,
    props: ['data'], 
    mounted () {
      this.renderChart(this.data, {responsive: true, maintainAspectRatio: false})
    }
  }
</script>