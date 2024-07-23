import React from 'react';
import Chart from 'react-apexcharts';

class RadialBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [60, 76, 67, 61, 80], // Move series out of options
      options: {
        chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0, // Start angle adjusted to -90 degrees
            endAngle:360 ,   // End angle adjusted to complete the circle
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            },
            barLabels: {
              enabled: true,
              useSeriesColors: true,
              offsetX: 8,
              fontSize: '16px',
              fontFamily: 'Inter, sans-serif', 
              formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
              },
            },
          }
        },
        colors: ['#6372EB', '#23CCF8', '#17B26A', '#FD9A27', '#23CCF8'], // Corrected color typo
        labels: ['Other $700.98', 'Market $6,500', 'Food $644.22', 'Grocery $450.55', 'Transport $300'],
        annotations: {
          points: [{
            x: 50, // Adjust X coordinate as needed
            y: 50, // Adjust Y coordinate as needed
            marker: {
              size: 0,
            },
            label: {
              borderColor: '#FF4560',
              borderWidth: 1,
              text: 'Start', // Label text
              textAnchor: 'middle',
              offsetX: 0,
              offsetY: 10,
              style: {
                fontSize: '12px',
                color: '#FF4560',
                background: 'transparent',
              }
            }
          }]
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }]
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
