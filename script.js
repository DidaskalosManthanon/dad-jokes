const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiURL = "https://dad-jokes-iota-wine.vercel.app/joke";


async function getJoke(){

    try {

        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.innerText = data[0].joke;    

    } catch (error) {

        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }
    
    
};

btnEl.addEventListener("click", getJoke);