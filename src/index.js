import { displayCountries, filterCountries } from "./templates/Countries";
import { Header } from "./templates/Header";
import { Detail } from "./templates/Detail";

import { getAllData } from "./utils/getAllData";

import "./styles/global.scss";
import "./styles/lightMode.scss";
import "./styles/darkMode.scss";

class Initialize {
  constructor(allCountries) {
    this.app = document.getElementById("app"); //main div with application
    this.allCountries = allCountries;

    this.app.innerHTML +=
      Header() +
      `<div id="countries">${displayCountries(this.allCountries)}</div>`; //add main components

    this.darkMode(); //Initialize darkMode button and listener once

    //Initialize search & filter & card elements and it's listeners
    this.declare();
    this.listeners();
  }
  darkMode() {
    this.mode = document.getElementById("Mode");
    this.mode.addEventListener("click", () => {
      this.app.classList.toggle("darkMode");
      this.app.classList.toggle("lightMode");
    });
  }
  declare() {
    this.countries = document.getElementById("countries");
    this.search = document.getElementById("search");
    this.regionBtns = document.querySelectorAll(".region-btn");
    this.cards = document.querySelectorAll(".card");
    this.header = document.getElementById("header");
  }
  listeners() {
    this.cardListener();
    this.searchListener();
    this.regionListener();
  }
  cardListener() {
    //cards
    this.cards.forEach((card) => {
      card.addEventListener("click", async () => {
        await this.cardSelection(card.id);

        this.backBtn.addEventListener("click", () => {
          this.reset();
          this.declare();
        });
      });
    });
  }
  searchListener() {
    //searchbox
    this.search.addEventListener("input", (e) => {
      if (!e.target.value) {
        return this.allCountries;
      } else {
        this.countries.innerHTML = displayCountries(
          filterCountries(this.allCountries, { search: e.target.value })
        );
      }

      this.declare();
      this.cardListener();
      this.regionListener();
    });
  }
  regionListener() {
    this.regionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.countries.innerHTML = displayCountries(
          filterCountries(this.allCountries, { region: btn.innerText })
        );

        this.declare();
        this.cardListener();
        this.searchListener();
      });
    });
  }
  async cardSelection(id) {
    this.countries.remove();
    this.header.remove();

    this.section = document.createElement("section");
    this.section.className = "detail";
    this.section.innerHTML = await Detail(id);

    this.app.append(this.section);
    this.backBtn = document.getElementById("back");
  }
  reset() {
    this.section.remove();
    this.app.append(this.header);
    this.app.append(this.countries);

    this.declare();
    this.listeners();
  }
}

window.onload = async () => {
  let countries = await getAllData();
  new Initialize(countries);
};
