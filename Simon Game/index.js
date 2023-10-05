let gameStarted = false;
let color = ['green', 'yellow', 'red', 'blue'];
let sequence = [];
let i = 0;

function playGame() {
    c = Math.floor(Math.random() * 4)
    sequence.push(color[c])
    $('h1').text('Level ' + sequence.length);
    setTimeout(() => {
        $('#' + color[c]).addClass('pressed');
        var audio = new Audio('./sounds/' + color[c] + '.mp3');
        audio.play();
    }, 500);
    setTimeout(() => {
        $('#' + color[c]).removeClass('pressed');
    }, 700);
    i = 0;
}

$(document).ready(function () {
    $(document).keyup(function (e) {
        if (!gameStarted) {
            gameStarted = true;
            sequence = [];
            $('body').removeClass('game-over');
            playGame();
        }
    });

    $('.btn').click(function () {
        if (gameStarted) {
            let clickedColor = $(this).attr('id');
            $('#' + clickedColor).addClass('pressed');
            setTimeout(() => {
                $('#' + clickedColor).removeClass('pressed');
            }, 100);
            if (clickedColor == sequence[i]) {
                i++;
                var audio = new Audio('./sounds/' + clickedColor + '.mp3');
                audio.play();
            }
            else {
                $('h1').text('Game over, Press a key to restart ');
                gameStarted = false;
                $('body').addClass('game-over');
                var audio = new Audio('./sounds/wrong.mp3');
                audio.play();
            }

            if (i == sequence.length) {
                playGame();
            }

        }
    });
});
