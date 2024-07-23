import React from 'react';
import Chart from 'react-apexcharts';

class RadialBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [60, 76, 67, 61, 80],
      options: {
        chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: -180,
            endAngle: 180,
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
            barLabels: {
              enabled: true,
              useSeriesColors: true,
              offsetX: 8,
              fontSize: '16px',
              fontFamily: 'Inter, sans-serif',
              formatter: (seriesName, opts) => {
                return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`;
              },
              style: {
                transform: 'rotate(-90  deg)', 
                textAlign: 'center',
                whiteSpace: 'nowrap',
              },
            },
          },
        },
        colors: ['#6372EB', '#23CCF8', '#17B26A', '#FD9A27', '#23CCF8'],
        labels: ['Other $700.98', 'Market $6,500', 'Food $644.22', 'Grocery $450.55', 'Transport $300'],
        annotations: {
          points: [{
            x: 50,
            y: 50,
            marker: {
              size: 0,
            },
            label: {
              borderColor: '#FF4560',
              borderWidth: 1,
              text: 'Start',
              textAnchor: 'middle',
              offsetX: 0,
              offsetY: 10,
              style: {
                fontSize: '12px',
                color: '#FF4560',
                background: 'transparent',
              },
            },
          }],
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
