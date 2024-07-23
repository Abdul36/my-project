import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false, // Disable the toolbar including the download menu
      },
      contextmenu: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 8, // Adjust the line width as needed
      colors: ['yellow'], // Set to transparent to use gradient fill
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 1,
        gradientToColors: [ '#71E26F','#72E270','#F1E91B','#F56565','#FCCACA'], // Gradient colors
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
      },
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // alternating background colors
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "0",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
      ],
    },
    yaxis: {
      title: {
        text: "Age of Money In Days",
      },
      labels: {
        show: false, // Hide y-axis labels
      },
      axisBorder: {
        show: true,
        color: '#000000', // Color of the y-axis border
        width: 0, // Thickness of the y-axis border
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#000000',
        width: 2,
      },
      crosshairs: {
        show: true,
        position: 'back',
        stroke: {
          color: '#FF0000', // Color of the horizontal line
          width: 1,
          dashArray: 0, // Solid line
        },
        yaxis: {
          show: true,
          label: {
            show: true,
            text: 'Threshold', // Text for the line
            style: {
              color: '#FF0000', // Color of the label
              fontSize: '12px',
              fontWeight: 600,
            },
          },
          offsetX: 0,
          offsetY: 10,
        },
      },
    },
  };

  const series = [
    {
      name: "Money",
      data: [45, 40, 49, 50, 49, 60],
    },
  ];

  return (
    <div className="line-chart">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
