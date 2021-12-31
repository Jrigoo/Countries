import { displayCountries, filterCountries } from "./templates/Countries";
import { Detail } from "./templates/Detail";

import { getAllData } from "./utils/getAllData";

import "./styles/global.scss";
import "./styles/lightMode.scss";
import "./styles/darkMode.scss";

class Initialize {
  constructor(countries) {
    this.main = document.getElementById("main");
    this.app = document.getElementById("app");
    this.countries = countries;
    this.app.innerHTML = displayCountries(this.countries);

    this.darkModeBtn = document.getElementById("Mode");
    this.header = document.getElementById("header");

    this.listeners();
  }
  listeners() {
    this.searchListener();
    this.cardListener();
    this.regionListener();
    this.darkModeListener();
  }
  darkModeListener() {
    this.darkModeBtn.addEventListener("click", () => {
      document.getElementById("main").classList.toggle("darkMode");
      document.getElementById("main").classList.toggle("lightMode");
    });
  }
  searchListener() {
    this.search = document.getElementById("search");
    this.search.addEventListener("input", (e) => {
      if (e.target.value) {
        this.app.innerHTML = displayCountries(
          filterCountries(this.countries, { search: e.target.value })
        );
      }
      this.cardListener();
    });
  }
  regionListener() {
    this.regionBtns = document.querySelectorAll(".region-btn");
    this.regionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.app.innerHTML = displayCountries(
          filterCountries(this.countries, { region: btn.innerHTML })
        );
      });
    });
  }
  cardListener() {
    this.cards = document.querySelectorAll(".card");
    this.cards.forEach((card) => {
      card.addEventListener("click", () => {
        Detail(card.id).then((data) => {
          this.app.innerHTML = data;
          this.header.style.display = "none";
          this.backBtnListener();
          this.borderCountryListener();
        });
        this.search.value = "";
      });
    });
  }
  backBtnListener() {
    document.getElementById("back").addEventListener("click", () => {
      header.style.display = "block";
      this.app.innerHTML = displayCountries(this.countries);
      this.listeners();
    });
  }
  borderCountryListener() {
    document.querySelectorAll(".border-country").forEach((btn) => {
      btn.addEventListener("click", () => {
        Detail(btn.innerHTML).then((data) => {
          this.app.innerHTML = data;
          this.backBtnListener();
          this.borderCountryListener();
        });
        this.search.value = "";
      });
    });
  }
}

window.onload = async () => {
  new Initialize(await getAllData());
};
