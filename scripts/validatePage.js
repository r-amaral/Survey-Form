import { navigationPage } from "./navigation.js";

const select = {
    statusSelect: document.querySelector(".content__select-status"),
    investSelect: document.querySelector(".content__select-invest"),
};

const inputSurvey = {
    statusInput: document.querySelectorAll(".list__input-status"),
    investInput: document.querySelectorAll(".list__input-invest"),
    fullNameInput: document.querySelector("#full-name"),
    emailInput: document.querySelector("#email"),
    ageInput: document.querySelector("#age"),
};

const sucessText = {
    fullNameSucess: document.querySelector(".success__item-fullName"),
    emailSucess: document.querySelector(".success__item-email"),
    ageSucess: document.querySelector(".success__item-age"),
};

const textArea = document.querySelector(".content__textarea");

const { statusInput, investInput, fullNameInput, emailInput, ageInput } =
    inputSurvey;
const { statusSelect, investSelect } = select;
const { fullNameSucess, emailSucess, ageSucess } = sucessText;

const inputData = [];

export function validateStatus(page) {
    if (!statusSelect.value) return alert("preencha o select");

    statusInput.forEach((input, index) => (inputData[index] = input.checked));

    if (!inputData.some((value) => value)) return alert("marque uma opção");

    navigationPage(page);
}

export function validateInvest(page) {
    if (!investSelect.value) return alert("preencha o select");

    investInput.forEach((input, index) => (inputData[index] = input.checked));

    if (!inputData.some((value) => value)) return alert("marque uma opção");

    navigationPage(page);
}

export function validateDetails(page) {
    if (!textArea.value) return alert("preencha o campo");
    navigationPage(page);
}

export function validateForm(page) {
    const regName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const regEmail = /\S+@\S+\.\S+/;

    if (!regName.test(fullNameInput.value)) return alert("nome inválido");
    if (!regEmail.test(emailInput.value)) return alert("email inválido");
    if (ageInput.value <= 0 || ageInput.value > 130)
        return alert("Idade inválida");

    const dataObj = {
        fullName: fullNameInput.value,
        email: emailInput.value,
        age: ageInput.value,
    };

    localStorage.setItem("Data", JSON.stringify(dataObj));

    const dataItem = JSON.parse(localStorage.getItem("Data"));

    fullNameSucess.innerHTML = dataItem.fullName;
    emailSucess.innerHTML = dataItem.email;
    ageSucess.innerHTML = dataItem.age;

    navigationPage(page);
}


export function newForm(page) {
    fullNameInput.value = null;
    emailInput.value = null;
    ageInput.value = null;
    textArea.value = null
    navigationPage(page);
}