import React from 'react';
import Plot from 'react-plotly.js';

const TimeSeriesChart = ({ timeSeriesData }) => {
  console.log('Time Series Data:', timeSeriesData);

  if (!timeSeriesData || timeSeriesData.length === 0) {
    return <div>No time-series data available.</div>;
  }

  const dates = timeSeriesData.map(item => item.date);
  const totalCases = timeSeriesData.map(item => item.totalCases);
  const activeCases = timeSeriesData.map(item => item.activeCases);
  const recovered = timeSeriesData.map(item => item.recovered);
  const deaths = timeSeriesData.map(item => item.deaths);

  const chartData = [
    {
      x: dates,
      y: totalCases,
      type: 'scatter',
      mode: 'lines',
      name: 'Total Cases'
    },
    {
      x: dates,
      y: activeCases,
      type: 'scatter',
      mode: 'lines',
      name: 'Active Cases'
    },
    {
      x: dates,
      y: recovered,
      type: 'scatter',
      mode: 'lines',
      name: 'Recovered'
    },
    {
      x: dates,
      y: deaths,
      type: 'scatter',
      mode: 'lines',
      name: 'Deaths'
    }
  ];

  return (
    <div className="chart-container">
      <h2>COVID-19 Trends Over Time</h2>
      <Plot
        data={chartData}
        layout={{ title: 'COVID-19 Case Trends Over Time', height: 400, width: 1000 }}
      />
    </div>
  );
};

export default TimeSeriesChart;