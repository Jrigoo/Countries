import { getDetailData } from "../utils/getDetailData";
import { sufix } from "../utils/Sample";

const Detail = async (query) => {
  const {
    Name,
    NativeName,
    Population,
    Region,
    SubRegion,
    Capital,
    Tld,
    Currencies,
    Languages,
    BorderCountries,
    Flag,
  } = await getDetailData(query);

  let Borders = Array.isArray(BorderCountries)
    ? `<h5>Border Countries:</h5>
        ${BorderCountries.map((country) => {
          return `
          <button class="border-country">${sufix[country]}</button>
          `;
        }).join(" ")}
      `
    : "";

  return `
     <section id="detail" class="detail">
      <button id="back"><i class="fas fa-arrow-left"></i> Back</button>
      <div class="country">
        <img src="${Flag}" alt="${Name} Flag" />

        <div class="country__desc">
          <h3>${Name}</h3>
            <div class="country__desc--item">
              <h5>Native Name:</h5>
              <h5>${NativeName}</h5>
            </div>
            <div class="country__desc--item">
              <h5>Population:</h5>
              <h5>${Population}</h5>
            </div>
            <div class="country__desc--item">
              <h5>Region:</h5>
              <h5>${Region}</h5>
            </div>
            <div class="country__desc--item">
              <h5>Sub Region:</h5>
              <h5>${SubRegion}</h5>
            </div>
            <div class="country__desc--item">
              <h5>Capital:</h5>
              <h5>${Capital}</h5>
            </div>
          </div>

        <div class="country__desc">
          <div class="country__desc--item">
              <h5>Top Level Domain:</h5>
              <h5>${Tld}</h5>
          </div>
          <div class="country__desc--item">
            <h5>Currencies:</h5>
            <h5>${Currencies}</h5>
          </div>
          <div class="country__desc--item">
            <h5>Languages:</h5>
            <h5>${Languages}</h5>
          </div>
        </div>

        <div class="country__borders">
          ${Borders}
        </div>
     </section>
    `;
};

export { Detail };
