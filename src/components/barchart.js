import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, // Hide toolbar
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%", // Adjust the width of the bars
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `$${val.toFixed(0)}`; // Format the value as dollars
      },
      offsetY: -10, // Move labels inside the bars
      style: {
        fontSize: "12px",
        colors: ["#28a745", "#dc3545"], // Color of the data labels for each series
        fontFamily: "Inter, sans-serif", // Font family for data labels
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        show: true, // Show x-axis labels
        style: {
          colors: "#000", // Color of x-axis labels
          fontSize: "12px",
          fontFamily: "Inter, sans-serif", // Added fontFamily
        },
      },
      axisTicks: {
        show: true, // Show axis ticks
      },
    },
    yaxis: {
      min: 50,
      max: 350,
      tickAmount: 7,
      labels: {
        formatter: function (val) {
          return `$${val.toFixed(0)}`; // Format y-axis labels as dollars
        },
        style: {
          fontFamily: "Inter, sans-serif", // Added fontFamily
        },
      },
    },
    colors: ["#28a745", "#dc3545"], // Green for Value 1, Red for Value 2
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
        type: "vertical", // Change to 'horizontal' if needed
        gradientToColors: ["#A5F3CF", "#F8A6A0"], // Gradients applied to all bars
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100], // Gradient stops
      },
    },
    legend: {
      show: false, // Hide legend
    },
  };

  // Sample series data with two values per month
  const series = [
    {
      name: "Value 1",
      data: [255, 305, 240, 290, 140, 105], // Example values for first series
    },
    {
      name: "Value 2",
      data: [200, 325, 210, 310, 170, 240], // Example values for second series
    },
  ];

  return (
    <div className="bar-chart">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
