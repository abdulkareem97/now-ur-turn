import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { minimizeNumber } from './Dashboard';

Chart.register(...registerables);

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const alternatingBackgroundColorPlugin = {
      id: "customCanvasBackgroundColor",
      beforeDraw: (chart) => {
        const {
          ctx,
          chartArea: { top, left, width, height },
        } = chart;
        const { datasets } = chart.data;

        ctx.save();

        const colors = ["#0f172a", "#1e293b"];
        datasets.forEach((dataset) => {
          dataset.data.forEach((_, index) => {
            const barWidth = width / dataset.data.length;
            const color = colors[index % colors.length];
            const topOffset = 100;

            ctx.fillStyle = color;
            ctx.fillRect(
              left + index * barWidth,
              top - topOffset,
              barWidth,
              height + topOffset
            );
          });
        });

        ctx.restore();
      },
    };

    Chart.register(alternatingBackgroundColorPlugin);

    const buildChart = () => {
      if (Chart.getChart(ctx)) {
        Chart.getChart(ctx).destroy();
      }

      const chartData = {
        labels: data.map((row) => row.hours),
        datasets: [
          {
            data: data.map((row) => row.users),
            borderRadius: 50,
            barThickness: 25,
            backgroundColor: "#fffd8c",
            hoverBackgroundColor: "#ffc800",
            borderColor: "yellow", 
            borderWidth: 2,             
          },
        ],
      };

      const options = {
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                return minimizeNumber(value) + " –";
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
          customCanvasBackgroundColor: {
            color: ["#0f172a", "#1e293b"],
          },
        },
      };

      new Chart(ctx, {
        type: "line",
        data: chartData,
        options,
      });
    };

    buildChart();

    return () => {
      if (Chart.getChart(ctx)) {
        Chart.getChart(ctx).destroy();
      }
    };
  }, [data]);

  return (
    <div className=" w-[70vw]">
      <canvas id="chart" ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
