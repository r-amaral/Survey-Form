import { navigationPage, page } from "./navigation.js";

import {
  validateFormChecks,
  validateDetails,
  validateForm,
  newForm,
} from "./validatePage.js";

const buttonEvents = [
  {
    selector: document.querySelector(".next__button-status"),
    query: () => validateFormChecks("Invest"),
  },
  {
    selector: document.querySelector(".next__button-invest"),
    query: () => validateFormChecks("Details"),
  },
  {
    selector: document.querySelector(".next__button-details"),
    query: () => validateDetails("Data"),
  },
  {
    selector: document.querySelector(".next__button-form"),
    query: () => validateForm("Success"),
  },
  {
    selector: document.querySelector(".button__sucess"),
    query: () => newForm("Welcome"),
  },
];

const buttonBack = document.querySelectorAll(".back-button");
const buttonSkip = document.querySelectorAll(".skip-button");

buttonSkip.forEach((next, index) => {
  next.addEventListener("click", () =>
    navigationPage(page[index + 1])
  );
});

buttonBack.forEach((back, index) => {
  back.addEventListener("click", () => navigationPage(page[index]));
});

buttonEvents.map(({ selector, query }) =>
  selector.addEventListener("click", query)
);
