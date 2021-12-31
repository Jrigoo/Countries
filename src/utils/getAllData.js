/* 
REST API COUNTRIES

Main Page -> Nombre, Population, Region y Capital,flag
API: https://restcountries.com/v3.1/all
*/
/* import fetch from "node-fetch"; */
const allDataURL = "https://restcountries.com/v3.1/all";

const getAllData = async () => {
  const response = await fetch(allDataURL);
  const data = await response.json();

  const countries = data.map(({ name, population, region, capital, flags }) => {
    let pais = {
      Name: name.common,
      Population: population || "-",
      Region: region,
      Capital: capital || "-",
      Flag: flags.svg,
    };
    return pais;
  });
  return countries;
};

export { getAllData };
