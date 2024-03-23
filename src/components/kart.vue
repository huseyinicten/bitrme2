<template>
 
 <h1 class="h1"> GRAFİK 1 </h1>
 <div>
  <canvas ref="radarChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from '/Users/h_ank/bitirmegit/bitrme2/node_modules/chart.js';

export default {
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      Chart.register(...registerables);

      const data = {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          },
          {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }
        ]
      };

      const config = {
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        }
      };

      new Chart(this.$refs.radarChart, config);
    }
  }
};
</script>

<style scoped>
canvas {
 
 background-color: #ffffff;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;

  
}


.h1{
    display: grid;
    margin-left:110px;
    color: #beb6b6a4;
    
  }
.labels{
color: rgb(0, 4, 8);

}
</style>