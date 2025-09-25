appMsg = document.getElementById("ball_msg");
let currentRand;
let isShowing = false;
let msg = [
    "Yes",
    "Definitely Not",
    "Maybe",
    "Don't count on it",
    "Absolutely!",
    "Ask your aunt",
    "Faith must decide",
    "Outlook: Not so good",
    "Oh Yes!",
    "Hard No.",
    "You bet!"]

function onShake() {
    if (isShowing) { resetBall(); }
    else {
        let rand = randNumGen();
        if (rand !== currentRand) {
            appMsg.innerHTML = msg[rand];
            currentRand = rand;
        }
        else {
            onShake();
        }
        appMsg.style.transform = `translateY(2px) rotate(${rand * 2}deg) scale(1)`;
        appMsg.style.opacity = 1;
        isShowing = true;
    }
}

function resetBall() {
    if (isShowing) {
        appMsg.style.transform = `translateY(2px) rotate(${-rand * 25}deg) scale(0.5)`;
        appMsg.style.opacity = 0;
        isShowing = false;
        setTimeout(onShake, 2000);
        return;
    }
}

