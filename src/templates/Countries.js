const filterCountries = (data, query) => {
  if (query.region) {
    return data.filter((country) =>
      country.Region.toLowerCase().includes(query.region.toLowerCase())
    );
  }
  if (query.search) {
    return data.filter((country) =>
      country.Name.toLowerCase().includes(query.search.toLowerCase())
    );
  }
};

const displayCountries = (countries) => {
  return countries
    .map(({ Name, Population, Region, Capital, Flag }) => {
      return `
    <div class="card" id="${Name}">
      <img src="${Flag}" alt="${Name} flag" class="card__img"/>
      <div class="card__content">
        <h4>${Name}</h4>
        <div class="card__content--item">
          <h5>Population:</h5>
          <h5>${Population}</h5>
        </div>
        <div class="card__content--item">
          <h5>Region:</h5>
          <h5>${Region}</h5>
        </div>
        <div class="card__content--item">
          <h5>Capital:</h5>
          <h5>${Capital}</h5>
        </div>
      </div>
    </div>
  `;
    })
    .join(" ");
};

export { displayCountries, filterCountries };
