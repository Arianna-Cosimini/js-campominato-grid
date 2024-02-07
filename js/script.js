


const myButton = document.querySelector("#btn-play");
myButton.addEventListener("click", function () {
    
    const gridElement = document.querySelector("#grid");
    gridElement.innerHTML = ''; 
    const randomNumbersArray = getRandomNumbersArray();


    const userChoice = document.querySelector("select").value;

    if(userChoice == 1){
        for (let i = 0; i < 100; i++) {
            newClass(gridElement, randomNumbersArray, i);
        }
    }else if (userChoice == 2){
        for (let i = 0; i < 81; i++) {
            newClass(gridElement, randomNumbersArray, i);
            
        }
    }else{
        for (let i = 0; i < 49; i++) {
            newClass(gridElement, randomNumbersArray, i);
        }}

});

function newClass (gridElement, randomNumbersArray, i){
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    newElement.innerText = randomNumbersArray[i];
    // aggiungo classe active a square al click
    const userChoice = document.querySelector("select").value;
    // livello di difficoltà scelto dall'utente
    if (userChoice == 2) {
        newElement.classList.add("medium");
    }else if( userChoice == 3){
        newElement.classList.add("easy")
    }


    newElement.addEventListener("click", function () {
        console.log(this);
        this.classList.toggle("active");
    });

    gridElement.append(newElement);
}

// genero un numero casuale indicando come parametro un numero massimo 
function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1;
}

// inserisce il numero solo se non è presente

function getRandomNumbersArray() {
    const numbersArray = [];

    while (numbersArray.length < 100) {
        const newNumber = generateRandomNumber(100);
        if (!numbersArray.includes(newNumber)) {
            numbersArray.push(newNumber);
        }
    }

    return numbersArray;
}
