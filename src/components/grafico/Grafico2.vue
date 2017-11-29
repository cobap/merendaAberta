<script>
import axios from 'axios'
import { Bar } from 'vue-chartjs'
export default {
name: 'grafico-2',
extends: Bar,
mounted () {
  axios.get(`https://merendaabertaapi.herokuapp.com/api/v1/subprefeitura/`).then(response => {
  const subPref = response.data

// Após o .map a variável siglaSubPref
// é um array com todas as siglas que estão
// dentro do retorno da API
  const siglaSubPref = subPref.map(el => {
    return el.siglaSubPref
  })

  const idhm = subPref.map(el => {
    return el.idhm
  })

  this.renderChart({
    labels: siglaSubPref,
    datasets: [
    {
      label: 'IDH médio',
      backgroundColor: '#f87979',
      data: idhm
    }
  ]
  },{
    responsive: true,
    maintainAspectRatio: false
  })
}).catch(e => {
  this.errors.push(e)
})
}
}
</script>