<script>
var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
};

var chartColors = window.chartColors;
var color = Chart.helpers.color;
import { Radar } from 'vue-chartjs'
  export default {
    name: 'grafico-radar',
    extends: Radar,
      mounted () {
        this.renderChart({
            labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: color('#C2185B').alpha(0.2).rgbString(),
                borderColor: color('#C2185B').rgbString(),
                pointBackgroundColor: color('#C2185B').rgbString(),
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: "My Second dataset",
                backgroundColor: color('#03A9F4').alpha(0.2).rgbString(),
                borderColor: color('#03A9F4').rgbString(),
                pointBackgroundColor: color('#03A9F4').rgbString(),
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            },]
        }, {responsive: true, maintainAspectRatio: false})
      }
  }
</script>