import { Bar } from 'vue-chartjs'

export default {
  name: "Chart",
  extends: Bar,
  props: {
    goodDays: {
      type: Number,
      required: true
    },
    avgDays: {
      type: Number,
      required: true
    },
    badDays: {
      type: Number,
      required: true
    }
  },
  mounted () {
    this.renderChart({
      labels: ['Mood'],
      datasets: [
        {
          label: 'Good',
          backgroundColor: '#07C901',
          data: [this.goodDays]
        },
        {
          label: 'Average',
          backgroundColor: '#1E6CFE',
          data: [this.avgDays]
        },
        {
          label: 'Bad',
          backgroundColor: '#FC2525',
          data: [this.badDays]
        }
      ]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            max: 7
          }
        }]
      }
    })
  }
}
