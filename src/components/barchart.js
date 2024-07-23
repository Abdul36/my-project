import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, 
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%", 
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `$${val.toFixed(0)}`; 
      },
      offsetY: -10, 
      style: {
        fontSize: "12px",
        colors: ["#28a745", "#dc3545"], 
        fontFamily: "Inter, sans-serif", 
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        show: true, 
        style: {
          colors: "#000", 
          fontSize: "12px",
          fontFamily: "Inter, sans-serif", 
        },
      },
      axisTicks: {
        show: true, 
      },
    },
    yaxis: {
      min: 50,
      max: 350,
      tickAmount: 7,
      labels: {
        formatter: function (val) {
          return `$${val.toFixed(0)}`; 
        },
        style: {
          fontFamily: "Inter, sans-serif", 
        },
      },
    },
    colors: ["#28a745", "#dc3545"], 
    grid: {
      borderColor: "#f1f1f1",
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical", 
        gradientToColors: ["#A5F3CF", "#F8A6A0"], 
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100], 
      },
    },
    legend: {
      show: false,
    },
  };


  const series = [
    {
      name: "Value 1",
      data: [255, 305, 240, 290, 140, 105], 
    },
    {
      name: "Value 2",
      data: [200, 325, 210, 310, 170, 240], 
    },
  ];

  return (
    <div className="bar-chart">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
