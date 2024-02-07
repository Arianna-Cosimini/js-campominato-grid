

const myButton = document.querySelector("#btn-play");
myButton.addEventListener("click", function () {
    const gridElement = document.querySelector("#grid");
    const randomNumbersArray = getRandomNumbersArray();
    //  creo elementi con classe square
    for (let i = 0; i < 100; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("square");
        newElement.innerText = randomNumbersArray[i];
        // aggiungo classe active a square al click
        newElement.addEventListener("click", function () {
            console.log(this);
            this.classList.toggle("active");
        });

        gridElement.append(newElement);
    }
});

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
