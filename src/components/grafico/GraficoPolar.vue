<script>
var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

var chartColors = window.chartColors;
var color = Chart.helpers.color;
import { PolarArea } from 'vue-chartjs'
  export default {
    name: 'grafico-polar',
    extends: PolarArea,
      mounted () {
        this.renderChart({
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
        }, {responsive: true, maintainAspectRatio: false})
      }
  }
</script>