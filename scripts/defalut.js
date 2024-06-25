// Initialize display element variable 
const visitsDisplay = document.querySelector(".visits")

let numVisits = Number(window.localStorage.getItem('numVisits-ls'))
0;


if (numVisits !==0 ) {
    visitsDisplay.textContent = numVisits;

}
else {
    visitsDisplay.textContent = 'this is your first visit. Welcome!';

}

// Increament the number of visits by one .

numVisits++;

//store the new visit total into localStorage, Key = numVisits-ls

localStorage.setItem("numVisits-ls", numVisits);

