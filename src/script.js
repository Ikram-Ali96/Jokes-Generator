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
    let apiKey = "d6973oc76fcf3c7at603c4b3a18b2464";
    let prompt = "";
    let context = "";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayJoke);

    
    
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit" , genarateJoke);