// api.js

export const fetchData = async () => {
  
  try {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    const data = await response.json();
    console.log('data fetch........................................') 
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const countriesWithId = data.map((country, index) => ({
      ...country,
      id: country.countryInfo.iso3 || index,
    }));
    console.log(countriesWithId,'ye wala')
    return countriesWithId;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
