/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchData } from "./api";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [totals, setTotals] = useState({
    totalCases: 0,
    totalTested: 0,
    totalDeaths: 0,
    totalRecovered: 0,
    totalActive : 0,
    activePerMillion:0,
    casesPerMillion:0,
    criticalPerMillion:0,
    deathsPerMillion:0,
    testsPerMillion:0,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setCountriesData(data);

        // Calculate totals
        let totalCases = 0;
        let totalTested = 0;
        let totalDeaths = 0;
        let totalRecovered = 0;
        let totalActive = 0;
        let activePerMillion=0;
        let casesPerMillion=0;
        let criticalPerMillion=0;
        let deathsPerMillion=0;
        let testsPerMillion = 0

        data.forEach(country => {
          totalCases += country.cases || 0;
          totalTested += country.tests || 0;
          totalDeaths += country.deaths || 0;
          totalRecovered += country.recovered || 0;
          totalActive+= country.active|| 0;
          activePerMillion += country.activePerOneMillion ||0
          casesPerMillion += country.casesPerOneMillion || 0
          criticalPerMillion += country.criticalPerOneMillion || 0
          deathsPerMillion += country.deathsPerOneMillion || 0
          testsPerMillion += country.testsPerOneMillion || 0
        });

        setTotals({
          totalCases,
          totalTested,
          totalDeaths,
          totalRecovered,
          totalActive,
          activePerMillion,
          casesPerMillion,
          criticalPerMillion,
          deathsPerMillion,
          testsPerMillion,
        });
        // console.log(totalCases)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <StateContext.Provider value={{ countriesData, totals }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateManager = () => useContext(StateContext);