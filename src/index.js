function displayIdea(response) {
    new Typewriter('#business-advice', {
        strings: response.data.answer,
        autoStart: true,
        cursor: " ",
        delay: 1,
    });
}

function generateIdea(event) {
    event.preventDefault();

    let userInput = document.querySelector("#user-input").value;

    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let context = "You are a startup idea generator. You have knowledge of different business concepts and ideas. You provide unique business ideas and key features. Please provide you answer in html for example: (<h3> Generated business idea title</h3><li>List three business ideas</li><p>A short description of the business cocepts in four lines</p>. Please sign SheCodes AI at the bottom left inside a strong html tag. Please never include ```html in the display ";
    let prompt = `Please provide me a business idea about ${userInput}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let businessAdvice = document.querySelector("#business-advice");
    businessAdvice.classList.remove("hidden");
    businessAdvice.innerHTML= `<div class="loader"></div> `

    axios.get(apiUrl).then(displayIdea);
}

let inputForm = document.querySelector("#user-input-form");
inputForm.addEventListener("submit", generateIdea);