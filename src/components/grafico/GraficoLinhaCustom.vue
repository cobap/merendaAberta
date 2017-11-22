<script>
import { Line } from 'vue-chartjs'
  export default {
    name: 'grafico-linha-custom',
    extends: Line,
    props: ['data'], 
    mounted () {
      this.renderChart(this.data, {responsive: true, maintainAspectRatio: false})
    }
  }
</script>