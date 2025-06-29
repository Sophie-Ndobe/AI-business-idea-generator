function generateIdea(event) {
    event.preventDefault();

    alert("hooray");
}

let inputForm = document.querySelector("#user-input-form");
inputForm.addEventListener("submit", generateIdea);