/* eslint-disable no-unused-vars */
// import { useContext } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
// import { ThemeContext } from "../../../context/ThemeContext";
// import { LIGHT_THEME } from "../../../constants/themeConstants";
// import "./AreaCharts.scss";
// import { useStateManager } from "../../../dataProvider/stateManager";

// const AreaBarChart = () => {
//   const { theme } = useContext(ThemeContext);
//   const { totals } = useStateManager();

//   const formatTooltipValue = (value) => {
//     return `${value / 100000}M`;
//   };

//   const formatYAxisLabel = (value) => {
//     return `${value / 10000000}M`;
//   };

//   const formatLegendValue = (value) => {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   };

//   const data = [
//     {
//       name: "Total Tested",
//       value: totals.totalTested,
//     },
//     {
//       name: "Total Recovered",
//       value: totals.totalRecovered,
//     },
//     {
//       name: "Total Confirmed",
//       value: totals.totalCases,
//     },
//   ];

//   return (
//     <div className="bar-chart">
//       <div className="bar-chart-info">
//         <h5 className="bar-chart-title">Total Recovered Vs Total Confirmed</h5>
//         <div className="chart-info-data">
//           <div className="info-data-value">Total Countrywise</div>
//         </div>
//       </div>
//       <div className="bar-chart-wrapper">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={750}
//             data={data}
//             margin={{
//               top: 5,
//               right: 5,
//               left: 0,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis
//               dataKey="name"
//               padding={{ left: 10 }}
//               axisLine={false}
//               tick={{
//                 fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
//                 fontSize: 14,
//               }}
//             />
//             <YAxis
//               padding={{ bottom: 10, top: 10 }}
//               tickFormatter={formatYAxisLabel}
//               tickCount={6}
//               axisLine={false}
//               tickSize={0}
//               tick={{
//                 fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
//               }}
//             />
//             <Tooltip
//               formatter={formatTooltipValue}
//               cursor={{ fill: "transparent" }}
//             />
//             <Legend
//               iconType="circle"
//               iconSize={10}
//               verticalAlign="top"
//               align="right"
//               formatter={formatLegendValue}
//             />
//             <Bar
//               dataKey="value"
//               fill="#475be8"
//               activeBar={false}
//               isAnimationActive={false}
//               barSize={24}
//               radius={[4, 4, 4, 4]}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AreaBarChart;



// import { useContext, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   CartesianGrid,
//   Area,AreaChart
// } from "recharts";
// import { ThemeContext } from "../../../context/ThemeContext";
// import { LIGHT_THEME } from "../../../constants/themeConstants";
// import "./AreaCharts.scss";
// import { useStateManager } from "../../../dataProvider/stateManager";

// const AreaLineChart = () => {
//   const { theme } = useContext(ThemeContext);
//   const { totals } = useStateManager();
//   const { countriesData } = useStateManager();
//   const [selectedCountry, setSelectedCountry] = useState("");


//   const handleCountryChange = (event) => {
//     setSelectedCountry(event.target.value);
//   };

//   const selectedCountryData = countriesData.find(
//     (country) => country.id === selectedCountry
//   );

//   const formatTooltipValue = (value) => {
//     return `${value / 100000}M`;
//   };

//   const formatYAxisLabel = (value) => {
//     return `${value / 10000000}M`;
//   };

//   const formatLegendValue = (value) => {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   };

//   const data = [
    
//     {
//       name: "Total Deaths",
//       value: totals.totalDeaths,
//     },
//     {
//       name: "Total Confirmed",
//       value: totals.totalCases,
//     },
   
//     {
//       name: "Total Tested",
//       value: totals.totalTested,
//     },
//     {
//       name: "Total Recovered",
//       value: totals.totalRecovered,
//     },
//   ];

//   return (
//     <div className="bar-chart"  >
//       <div className="bar-chart-info">
//         <h5 className="bar-chart-title"></h5>
//         <div className="bar-info-data" style ={{display:'flex',justifyContent:'space-between'}}>
//           <div className="info-data-value">Total Type of Cases</div>
//           <select onChange={handleCountryChange} value={selectedCountry}>
//           <option value="">Select a country</option>
//       {countriesData.map((country) => (
//         <option key={country.id} value={country.id}>
//           {country.country}
//         </option>
//       ))}
//     </select>
//     {selectedCountryData && (
//         <div>
//           <h2>{selectedCountryData.country}</h2>
//           <p>Total Cases: {selectedCountryData.cases}</p>
//           <p>Total Deaths: {selectedCountryData.deaths}</p>
//           <p>Total Recovered: {selectedCountryData.recovered}</p>
//           <p>Total Tested: {selectedCountryData.tests}</p>
//           {/* Add other data you want to display */}
//         </div>
//       )}
//         </div>
//       </div>
//       <div className="bar-chart-wrapper">
//         <ResponsiveContainer width="100%" height="100%">
         
//           <AreaChart
//             width={500}
//             height={750}
//             data={data}
//             margin={{
//               top: 5,
//               right: 5,
//               left: 0,
//               bottom: 5,
//             }}
//           >
//             <defs>
//               <linearGradient id="backgroundGradient" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#2451B7" stopOpacity="0.5" />
//                 <stop offset="95%" stopColor="#2451B7" stopOpacity="0.1" />
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="0.5 0.5" />
//             <XAxis
//               dataKey="name"
//               padding={{ left: 10 }}
//               axisLine={false}
//               tick={{
//                 fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
//                 fontSize: 14,
//               }}
//             />
//             <YAxis
//               padding={{ bottom: 10, top: 10 }}
//               tickFormatter={formatYAxisLabel}
//               tickCount={6}
//               axisLine={false}
//               tickSize={0}
//               tick={{
//                 fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
//               }}
//             />
//             <Tooltip
//               formatter={formatTooltipValue}
//               cursor={{ fill: "transparent" }}
//             />
//             <Legend
//               iconType="circle"
//               iconSize={10}
//               verticalAlign="top"
//               align="right"
//               formatter={formatLegendValue}
//             />
//             <Line
//               type="monotone"
//               dataKey="value"
//               stroke="#475be8"
//               strokeWidth={3}
//               dot={true}
//             />
//             <Area
//               type="monotone"
//               dataKey="value"
//               name="Value"
//               stroke="#8884d8"
//               fillOpacity={1}
//               fill="url(#backgroundGradient)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AreaLineChart;

import { useContext, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Area, AreaChart
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";
import { useStateManager } from "../../../dataProvider/stateManager";
import { useTheme } from "../../../context/ThemeContext";

const AreaLineChart = () => {
  const { theme } = useContext(ThemeContext);
  const { totals } = useStateManager();
  const { countriesData } = useStateManager();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryData, setSelectedCountryData] = useState(null);
  
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    const countryData = countriesData.find(country => country.id === event.target.value);
    setSelectedCountryData(countryData);
  };

  const formatTooltipValue = (value) => {
    return `${value / 10000}M`;
  };

  const formatYAxisLabel = (value) => {
    return `${value / 1000000}M`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  let data = [
    {
      name: "Total Deaths",
      value: totals.totalDeaths,
    },
    {
      name: "Total Confirmed",
      value: totals.totalCases,
    },
    {
      name: "Total Tested",
      value: totals.totalTested,
    },
    {
      name: "Total Recovered",
      value: totals.totalRecovered,
    },
  ];

  if (selectedCountryData) {
    data = [
      {
        name: "Total Deaths",
        value: selectedCountryData.deaths,
      },
      {
        name: "Total Confirmed",
        value: selectedCountryData.cases,
      },
      {
        name: "Total Tested",
        value: selectedCountryData.tests,
      },
      {
        name: "Total Recovered",
        value: selectedCountryData.recovered,
      },
    ];
  }

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title"></h5>
        <div className="bar-info-data" style={{ display: 'flex', justifyContent: 'space-evenly',alignItems:'center'}}>
          <div className="info-data-value">Total Cases</div>
          <div style={{ position: "static", width: "70%" }}>
          <select
              style={{
                width: "50%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: theme === LIGHT_THEME ? "#fff" : "#383854",
                color: theme === LIGHT_THEME ? "black" : "#fff",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onChange={handleCountryChange}
              value={selectedCountry}
            >
            <option value="">Select a country</option>
            {countriesData.map((country) => (
              <option key={country.id} value={country.id}>
                {country.country}
              </option>
            ))}
          </select>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={750}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="backgroundGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2451B7" stopOpacity="0.5" />
                <stop offset="95%" stopColor="#2451B7" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0.2 0.2" />
            <XAxis
              dataKey="name"
              padding={{ left: 10 }}
              axisLine={true}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
              label={{ value: "Types of Cases", position: "insideBottom", dy: 6 }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={true}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
              label={{ value: "Population", position: "insideLeft", angle: -90, dx: 2 }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#475be8"
              strokeWidth={3}
              dot={true}
            />
            <Area
              type="monotone"
              dataKey="value"
              name="Value"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#backgroundGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaLineChart;

