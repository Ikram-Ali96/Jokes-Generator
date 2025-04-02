function genarateJoke(event) {
    event.preventDefault();
    let jokeElement = ducoment.querySelector("#joke");

    new Typewriter("#joke", {
      strings: "What do you call an alligator in a vest? An investigator!",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
    
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit" , genarateJoke);