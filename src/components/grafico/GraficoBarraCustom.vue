<script>
import { Bar } from 'vue-chartjs'
  export default {
    name: 'grafico-barra-custom',
    extends: Bar,
    props: ['data'],
      mounted () {
        this.renderChart(this.data, {responsive: true, maintainAspectRatio: false})
      }
  }
</script>