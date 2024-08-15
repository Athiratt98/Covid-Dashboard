import React, { useEffect, useState } from 'react';
import covidData from '../../covidData.json';
import Plot from 'react-plotly.js';
import './styles.css';
import MapView from '../mapView';
import TimeSeriesChart from '../timeSeriesChart';
const Dashboard = () => {
  const [selectedState, setSelectedState] = useState('');
  const stateNames = covidData.stateData.map(state => state.state);

  const stateData = selectedState
    ? covidData.stateData.find(state => state.state === selectedState)
    : {
      totalCases: covidData.totalCases,
      activeCases: covidData.activeCases,
      recovered: covidData.recovered,
      deaths: covidData.deaths,
      lat: 20.5937,
      lng: 78.9629,
      timeSeriesData: covidData.stateData.length > 0 ? covidData.stateData[0].timeSeriesData : []
    };



  if (!stateData) return <div>No data available for the selected state.</div>;

  const totalCases = stateData.totalCases || 0;
  const activeCases = stateData.activeCases || 0;
  const recovered = stateData.recovered || 0;
  const deaths = stateData.deaths || 0;
  const pieData = {
    labels: ['Total cases', 'Active Cases', 'Recovered', 'Deaths'],
    values: [totalCases, activeCases, recovered, deaths],
    type: 'pie'
  };
  const timeSeriesData = selectedState
    ? covidData.stateData.find(state => state.state === selectedState).timeSeriesData
    : covidData.timeSeriesData;
  console.log('State Data:', stateData);

  return (
    <div>
      <div>
        <label htmlFor="state-filter">Select State: </label>
        <select
          id="state-filter"
          onChange={(e) => setSelectedState(e.target.value)}
          value={selectedState}
        >
          <option value="">All States</option>
          {stateNames.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
      </div>
      <div className="chart-container">
        <h2>Total Cases: {totalCases}</h2>


        <Plot
          data={[pieData]}
          layout={{ title: 'COVID-19 Case Distribution', height: 400, width: 500 }}
        />
      </div>
      <TimeSeriesChart timeSeriesData={stateData.timeSeriesData} />
      <MapView stateDataList={covidData.stateData} />
    </div>
  );
};

export default Dashboard;
