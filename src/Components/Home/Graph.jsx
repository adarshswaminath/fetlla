import React from "react";
import Chart from "react-apexcharts";

const Graph = ({ batchExpense }) => {
    console.log(batchExpense);
  const options = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: batchExpense.map((item) => item.batch_name),
      title: {
        text: "Batch name"
      }
    },
    yaxis: {
        title: {
            text: "Total Income"
        },
    },
    colors: ["#4F46E5"],
    grid: {
      show: true,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 4,
    },
  };

  const series = [
    {
      name: "Total Income",
      data: batchExpense.map((item) => parseFloat(item.total_income)),
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-lg">
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default Graph;
