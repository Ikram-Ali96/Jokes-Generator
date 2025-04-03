function displayJoke(response){

new Typewriter("#joke", {
  strings: response.data.answwer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function genarateJoke(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "d6973oc76fcf3c7at603c4b3a18b2464";
    let prompt = `User instructions: Generate funny British jokes ${instructionsInput.value}`;
    let context =
    "You are a funny AI comedian that generates British jokes. You're mission is to generate 2-3 lines jokes in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions below. Do not include a title to the joke. Sign the joke with 'SheCodes AI' inside a <strong> element at the end of the joke and NOT at the beginning.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let jokeElement = document.querySelector("#joke"); 
    jokeElement.classList.remove("hidden");
    jokeElement.innerHTML = `Generating British joke about ${instructionsInput.value}`;



    axios.get(apiUrl).then(displayJoke);
    
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit" , genarateJoke);