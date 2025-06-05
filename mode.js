
// const modo = document.getElementById("modo");
// modo.addEventListener('click', function () {

//     alert("aaaaa");


//     if (modo.innerText == 0) {
//         modo.value = 1;
//     } else {
//         modo.innerText = 0;
//     }
// });

function setModo() {

    const modo = document.getElementById("modo");
    if (modo.innerText == 0) {

        const body = document.querySelector("body");
        body.classList.replace("bg-black", "bg-white");

        const nav = document.querySelector("nav");
        nav.classList.replace("bg-dark", "bg-danger");

        const title = document.getElementById("title");
        if (title) {
            title.classList.remove("bg-primary");
            title.style.background = "#2f4f4f";
        }

        const table = document.querySelector("table");
        if (table) {
            table.classList.replace("table-dark", "table-light");
        }

        const sections = document.querySelectorAll("#section");
        if (sections) {
            sections.forEach(element => {
                element.classList.replace("text-white", "text-black");
                element.classList.replace("bg-dark", "bg-body-tertiary");
            })
        }

        const lists = document.querySelectorAll("#list");
        if (lists) {
            lists.forEach(element => {
                element.setAttribute("data-bs-theme", "light");
            })
        }

        const card = document.getElementById("card");
        if (card) {
            card.setAttribute("data-bs-theme", "light");
        }

        const form = document.getElementById("formulario");
        if (form) {
            form.setAttribute("data-bs-theme", "light");
            form.classList.replace("bg-dark", "bg-light");
            form.classList.add("text-black");
        }

        const footer = document.querySelector("footer");
        footer.classList.replace("bg-dark", "bg-danger");
        modo.innerText = 1;
    } else {

        const body = document.querySelector("body");
        body.classList.replace("bg-white", "bg-black");

        const nav = document.querySelector("nav");
        nav.classList.replace("bg-danger", "bg-dark");

        const title = document.getElementById("title");
        if (title) {
            title.style.background = "#0D6EFD";
        }

        const table = document.querySelector("table");
        if (table) {
            table.classList.replace("table-light", "table-dark");
        }

        const sections = document.querySelectorAll("#section");
        if (sections) {
            sections.forEach(element => {
                element.classList.replace("text-black", "text-white");
                element.classList.replace("bg-body-tertiary", "bg-dark");
            })
        }

        const lists = document.querySelectorAll("#list");
        if (lists) {
            lists.forEach(element => {
                element.setAttribute("data-bs-theme", "dark");
            })
        }

        const card = document.getElementById("card");
        if (card) {
            card.setAttribute("data-bs-theme", "dark");
        }


        const form = document.getElementById("formulario");
        if (form) {
            form.setAttribute("data-bs-theme", "dark");
            form.classList.replace("bg-light", "bg-dark");
            form.classList.remove("text-black");
        }

        const footer = document.querySelector("footer");
        footer.classList.replace("bg-danger", "bg-dark");
        modo.innerText = 0;
    }
};

