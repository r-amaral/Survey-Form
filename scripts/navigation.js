const section = {
    welcome: document.querySelector(".welcome"),
    start: document.querySelector(".start"),
    status: document.querySelector(".status"),
    invest: document.querySelector(".invest"),
    details: document.querySelector(".details"),
    form: document.querySelector(".form"),
    success: document.querySelector(".success"),
};

const { welcome, start, status, invest, details, form, success } = section;

export const page = [
    "Welcome",
    "Start",
    "Status",
    "Invest",
    "Details",
    "Data",
    "Sucess",
];

export const navigationPage = (page) => {
    switch (page) {
        case "Welcome":
            welcome.style.display = "flex";
            start.style.display = "none";
            success.style.display = "none";
            return;
        case "Start":
            welcome.style.display = "none";
            start.style.display = "flex";
            status.style.display = "none";
            break;
        case "Status":
            start.style.display = "none";
            status.style.display = "flex";
            invest.style.display = "none";
            break;
        case "Invest":
            status.style.display = "none";
            invest.style.display = "flex";
            details.style.display = "none";
            break;
        case "Details":
            invest.style.display = "none";
            details.style.display = "flex";
            form.style.display = "none";
            break;
        case "Data":
            details.style.display = "none";
            form.style.display = "flex";
            break;
        case "Success":
            form.style.display = "none";
            success.style.display = "flex";
            break;
    }
};
