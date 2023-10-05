document.addEventListener('keydown', function (event) {
    if (event.key === 'w') {
        document.querySelector('.w').click();
    }
    else if (event.key === 'a') {
        document.querySelector('.a').click();
    }
    else if (event.key === 's') {
        document.querySelector('.s').click();
    }
    else if (event.key === 'd') {
        document.querySelector('.d').click();
    }
    else if (event.key === 'j') {
        document.querySelector('.j').click();
    }
    else if (event.key === 'k') {
        document.querySelector('.k').click();
    }
    else if (event.key === 'l') {
        document.querySelector('.l').click();
    }
})

function w() {
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
    document.querySelector('.w').classList.add('pressed');
    setTimeout(() => document.querySelector('.w').classList.remove('pressed'), 200);

}

function a() {
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
    document.querySelector('.a').classList.add('pressed');
    setTimeout(() => document.querySelector('.a').classList.remove('pressed'), 200);

}

function s() {
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
    document.querySelector('.s').classList.add('pressed');
    setTimeout(() => document.querySelector('.s').classList.remove('pressed'), 200);

}

function d() {
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
    document.querySelector('.d').classList.add('pressed');
    setTimeout(() => document.querySelector('.d').classList.remove('pressed'), 200);

}

function j() {
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
    document.querySelector('.j').classList.add('pressed');
    setTimeout(() => document.querySelector('.j').classList.remove('pressed'), 200);

}

function k() {
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
    document.querySelector('.k').classList.add('pressed');
    setTimeout(() => document.querySelector('.k').classList.remove('pressed'), 200);

}

function l() {
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    document.querySelector('.l').classList.add('pressed');
    setTimeout(() => document.querySelector('.l').classList.remove('pressed'), 200);

}
