/* Music */
function toggleMusic() {
    const bgMusic = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "♫ Music: Play";
    } else {
        bgMusic.pause();
        musicBtn.textContent = "♫ Music: Pause";
    }
}


/* Calories Counter*/
function calculateCalories(baseValue, pieces) {
    return baseValue * pieces;
}

function updateNutrition() {
    let type = document.getElementById("chocoType").value;
    let pieces = document.getElementById("piecesInput").value;


    let caloriesPerPiece = (type === "dark") ? 55 : (type === "milk") ? 60 : 65;
    let weightPerPiece = 10;
    let sugarPerPiece = (type === "dark") ? 3.0 : (type === "milk") ? 5.2 : 5.9;
    let fatPerPiece = (type === "dark") ? 4.2 : (type === "milk") ? 3.5 : 3.8;
    let proteinPerPiece = (type === "dark") ? 0.8 : (type === "milk") ? 0.7 : 0.6;

    if (pieces === "") {
        alert("Please enter the number of pieces!");
    } else {
        let numPieces = parseInt(pieces);
        if (numPieces < 1) {
            numPieces = 1;
        }

        document.getElementById("pieceCountDisplay").innerHTML = numPieces + (numPieces === 1 ? " Piece" : " Pieces");
        document.getElementById("calories").innerHTML = calculateCalories(caloriesPerPiece, numPieces);
        document.getElementById("weight").innerHTML = calculateCalories(weightPerPiece, numPieces);
        document.getElementById("sugar").innerHTML = (calculateCalories(sugarPerPiece, numPieces)).toFixed(1);
        document.getElementById("fat").innerHTML = (calculateCalories(fatPerPiece, numPieces)).toFixed(1);
        document.getElementById("protein").innerHTML = (calculateCalories(proteinPerPiece, numPieces)).toFixed(1);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let piecesInput = document.getElementById("piecesInput");
    let chocoType = document.getElementById("chocoType");

    if (piecesInput) {
        piecesInput.oninput = updateNutrition;
    }
    if (chocoType) {
        chocoType.onchange = updateNutrition;
    }
});

/* For Alert */

function submitEnquiry(event) {
    event.preventDefault();

    alert("Your enquiry has been submitted successfully!");

    event.target.reset();
}
