/* 
REST API COUNTRIES
Detail Page -> Nombre, Native name, Population, Region, Sub Region, 
Capital, Top level Domain, Currencies, Languages, Border Countries, Flag
API:https://restcountries.com/v3.1/name/${name}
*/
/* import fetch from "node-fetch"; */

const getDetailData = async (name) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const data = await response.json();
  const country = data[0];

  let key = Object.keys(country.name.nativeName)[0];
  let capital = "";
  try {
    capital = country.capital[0];
  } catch (e) {
    console.log("");
  }

  const filtered = {
    Name: country.name.common,
    NativeName: country.name.nativeName[key].common,
    Population: country.population,
    Region: country.region,
    SubRegion: country.subregion,
    Capital: capital,
    Tld: country.tld[0],
    Currencies: country.currencies[Object.keys(country.currencies)[0]].name,
    Languages: Object.values(country.languages),
    BorderCountries: country.borders,
    Flag: country.flags.svg,
  };

  return filtered;
};

/* const getAllS = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  let all = {};

  data.forEach((country) => (all[country.cca3] = country.name.common));
  console.log(all);
}; */

export { getDetailData };
