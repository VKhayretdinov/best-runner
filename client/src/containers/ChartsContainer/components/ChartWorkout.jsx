import React, { Component } from 'react';
import Chart from 'chart.js';

class ChartWorkout extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');

    this.newChart(myChartRef);
  }

  newChart = chartRef => (
    new Chart(chartRef, {
      type: 'bar',
      data: {
        labels: this.props.columnLabels,
        datasets: [
          {
            backgroundColor: 'rgba(101, 104, 247, 1)',
            label: this.props.chartLabel,
            data: this.props.dataset,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Miles',
            },
            ticks: {
              beginAtZero: true,
              callback(value) {
                return `${value} mi`;
              },
            },
          }],
          xAxes: [{
            ticks: {
              callback(value) {
                return `${value} w`;
              },
            },
          }],
        },
      },
    })
  );

  render() {
    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    );
  }
}

export default ChartWorkout;
