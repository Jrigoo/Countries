/* 
REST API COUNTRIES
Detail Page -> Nombre, Native name, Population, Region, Sub Region, 
Capital, Top level Domain, Currencies, Languages, Border Countries, Flag
API:https://restcountries.com/v3.1/name/${name}
*/
/* import fetch from "node-fetch"; */

const getDetailData = async (pais) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${pais}?fullText=true`
  );
  const data = await response.json();
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags,
  } = data[0];

  const filtered = {
    Name: name.common,
    NativeName: name.nativeName
      ? name.nativeName[Object.keys(name.nativeName)[0]].common
      : "-",
    Population: population,
    Region: region,
    SubRegion: subregion || "-",
    Capital: capital || "-",
    Tld: tld ? tld[0] : "-",
    Currencies: currencies ? currencies[Object.keys(currencies)[0]].name : "-",
    Languages: languages ? Object.values(languages) : "-",
    BorderCountries: borders || "-",
    Flag: flags.svg,
  };

  return filtered;
};

export { getDetailData };
