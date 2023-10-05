function dice() {
    let img1 = document.querySelector(".img1")
    let img2 = document.querySelector(".img2")
    dice1 = (Math.floor(Math.random() * 6) + 1)
    dice2 = (Math.floor(Math.random() * 6) + 1)
    img2.setAttribute("src", "./images/dice" + dice2 + ".png")
    img1.setAttribute("src", "./images/dice" + dice1 + ".png")
    let winner = document.querySelector(".container h1")
    if (dice1 > dice2) {
        winner.textContent = "🥳 Player 1 has won "
    }
    else if (dice1 < dice2) {
        winner.textContent = "Player 2 has won 🥳"
    }

    else {
        winner.textContent = "Its a draw"
    }

}

document.addEventListener('DOMContentLoaded', function () {
    dice();
});