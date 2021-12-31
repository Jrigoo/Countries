import { displayCountries, filterCountries } from "./templates/Countries";
import { Detail } from "./templates/Detail";

import { getAllData } from "./utils/getAllData";

import "./styles/global.scss";
import "./styles/lightMode.scss";
import "./styles/darkMode.scss";

const app = document.getElementById("app");
const mode = document.getElementById("Mode");

class Initialize {
  constructor(countries) {
    this.app = app;
    this.countries = countries;
    this.app.innerHTML = displayCountries(this.countries);
    this.declarations();
    this.searchListener();
    this.cardListener();
    this.regionListener();
  }
  declarations() {
    this.header = document.getElementById("header");
    this.search = document.getElementById("search");
    this.cards = document.querySelectorAll(".card");
    this.regionBtns = document.querySelectorAll(".region-btn");
  }
  searchListener() {
    this.search.addEventListener("input", (e) => {
      if (e.target.value) {
        this.app.innerHTML = displayCountries(
          filterCountries(this.countries, { search: e.target.value })
        );
      }
      this.declarations();
      this.cardListener();
      this.regionListener();
    });
  }
  regionListener() {
    this.regionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.app.innerHTML = displayCountries(
          filterCountries(this.countries, { region: btn.innerHTML })
        );
        this.declarations();
        this.cardListener();
        this.searchListener();
      });
    });
  }
  cardListener() {
    this.cards.forEach((card) => {
      card.addEventListener("click", () => {
        Detail(card.id).then((data) => {
          this.app.innerHTML = data;
          this.header.style.display = "none";
          this.backBtnListener();
        });
        this.search.value = "";
      });
    });
  }
  backBtnListener() {
    document.getElementById("back").addEventListener("click", () => {
      header.style.display = "block";
      this.app.innerHTML = displayCountries(this.countries);
      this.reset();
    });
  }
  reset() {
    this.declarations();
    this.searchListener();
    this.cardListener();
    this.regionListener();
  }
}

window.onload = async () => {
  new Initialize(await getAllData());
};

mode.addEventListener("click", () => {
  document.getElementById("main").classList.toggle("darkMode");
  document.getElementById("main").classList.toggle("lightMode");
});
