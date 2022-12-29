import { navigationPage, page } from "./navigation.js";

import {
    validateStatus,
    validateInvest,
    validateDetails,
    validateForm,
} from "./validatePage.js";

const buttonNext = {
    buttonStatus: document.querySelector(".next__button-status"),
    buttonInvest: document.querySelector(".next__button-invest"),
    buttonDetails: document.querySelector(".next__button-details"),
    buttonForm: document.querySelector(".next__button-form"),
    buttonSuccess: document.querySelector(".button__sucess"),
};

const { buttonStatus, buttonInvest, buttonDetails, buttonForm, buttonSuccess } =
    buttonNext;

const buttonBack = document.querySelectorAll(".back-button");
const buttonSkip = document.querySelectorAll(".skip-button");

buttonSkip.forEach((next, index) => {
    next.addEventListener("click", () => navigationPage(page[index + 1]));
});

buttonBack.forEach((back, index) => {
    back.addEventListener("click", () => navigationPage(page[index]));
});

buttonStatus.addEventListener("click", () => validateStatus("Invest"));
buttonInvest.addEventListener("click", () => validateInvest("Details"));
buttonDetails.addEventListener("click", () => validateDetails("Data"));
buttonForm.addEventListener("click", () => validateForm("Success"));
buttonSuccess.addEventListener("click", () => navigationPage("Welcome"));
