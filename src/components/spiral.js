import React from 'react';
import Chart from 'react-apexcharts';

class RadialBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [60, 76, 67, 61, 80],
      selectedValue: null,
      options: {
        chart: {
          height: 390,
          type: 'radialBar',
          events: {
            dataPointMouseEnter: (event, chartContext, config) => {
              const index = config.dataPointIndex;
              const value = this.state.series[index];
              this.setState({ selectedValue: value });
            },
            dataPointMouseLeave: () => {
              this.setState({ selectedValue: null });
            }
          }
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 360,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
            barWidth: '15%',
          },
        },
        colors: ['#6372EB', '#23CCF8', '#17B26A', '#FD9A27', '#23CCF8'],
        labels: ['Other $700.98', 'Market $6,500', 'Food $644.22', 'Grocery $450.55', 'Transport $300'],
        annotations: {
          position: 'back',
          points: this.state.selectedValue !== null ? [{
            x: '50%',
            y: '50%',
            marker: {
              size: 0,
            },
            label: {
              borderColor: '#FF4560',
              borderWidth: 1,
              text: `Value: ${this.state.selectedValue}`,
              textAnchor: 'middle',
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: '16px',
                color: '#FF4560',
                background: 'transparent',
              },
            },
          }] : [],
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        }],
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="radialBar" height={390} />
      </div>
    );
  }
}

export default RadialBarChart;
