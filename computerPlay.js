
let options = ["rock", "paper", "scissors"];
function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

let userScore = 0;
let pcScore = 0;

function round() {

    let userSelect = prompt("Choice: Rock, Paper or Scissors", "La buena piedra, nada le gana.");
    let userChoice = userSelect.toLowerCase();

    let pcChoice = options[randomNumber(0, 2)];

    if(userChoice === "rock") {
        if(pcChoice === "paper") {
            alert("Perdiste, parece que la piedra no es invencible despues de todo...");
            ++pcScore;
            alert(`Puntaje: Jugado: ${userScore} vs PC: ${pcScore}`);
            return
        } else if(pcChoice === "rock") {
            alert("Qué pasa cuando una fuerza inamovible se encuentra con otra fuerza inamovible? Exacto, empatan.");
            alert(`Puntaje: Jugado: ${userScore} vs PC: ${pcScore}`);
            return
        } else {
            alert("La buena piedra, nada le gana.");
            ++userScore;
            alert(`Puntaje: Jugado: ${userScore} vs PC: ${pcScore}`);            
            return
        }
    } else if(userChoice === "paper") {
        if(pcChoice === "scissors") {
            alert("Perdiste, tijeras cortan papel.");
            ++pcScore;
            alert(`Puntaje: Jugado: ${userScore} vs PC: ${pcScore}`);            
            return
        } else if(pcChoice === "paper") {
            alert("Empate, sin \"Boligoma\" dos papeles no hacen nada.");
            alert(`Puntaje: Jugado: ${userScore} vs PC: ${pcScore}`);
            return
        } else {
            alert("Ganaste, la todo poderosa piedra sucumbe ante ti...");
            ++userScore;
            alert(`Puntaje: Jugado: ${userScore} vs PC: ${pcScore}`);            
            return
        }
    } else if(userChoice === "scissors") {
        if(pcChoice === "rock") {
            alert("Ni el mas templado de los aceros puede con la quimérica fuerza de la piedra... All Hail the King!");
            ++pcScore;
            alert(`Puntaje: Jugado: ${userScore} vs PC: ${pcScore}`);            
            return
        } else if(pcChoice === "scissors") {
            alert("2 tijeras? ( ͡° ͜ʖ ͡°)");
            alert(`Puntaje: Jugado: ${userScore} vs PC: ${pcScore}`);
            return
        } else {
            alert("Ganaste");
            ++userScore;
            alert(`Puntaje: Jugado: ${userScore} vs PC: ${pcScore}`);            
            return
        }

    } else {
        alert("Capo, sos pelotudo? tres opciones hay");
    }
}

while (userScore < 5 && pcScore < 5) {
    round();
    if (userScore == 5) {
        alert("GANASTE!");
    } else if (pcScore == 5) {
        alert("PERDISTE!");
    } else {
        alert("Siguiente ronda!");
    }
}
