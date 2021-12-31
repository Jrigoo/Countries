const Header = () => {
  return `
  <header class="header" id="header">
      <div class="searchbox">
        <i class="fas fa-search lupa"></i>
        <input type="text" class="searchbox_input" id="search" placeholder="Search for a country..."/>
      </div>
      <div class="dropdown">
        <div class="dropdown__btn">Filter by Region <i class="fas fa-chevron-down arrow"></i></div>
        <div class="dropdown__content">
          <button class="region-btn">Africa</button>
          <button class="region-btn">America</button>
          <button class="region-btn">Asia</button>
          <button class="region-btn">Europe</button>
          <button class="region-btn">Oceania</button>
        </div>
      </div>
    </header>
    `;
};

export { Header };
