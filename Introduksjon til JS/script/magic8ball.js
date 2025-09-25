appMsg = document.getElementById("ball_msg");

let msg = [
    "Yes",
    "Definitely Not",
    "Maybe",
    "Don't count on it",
    "Absolutely!",
    "Ask your aunt",
    "Faith must decide",
    "Outlook: Not so good",
    "Ofcourse!",
    "Hard No.",
    "You bet!"

]
let currentRand;
let isShowing = false;



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
        appMsg.style.opacity = 1;
        isShowing = true;
    }
}

function resetBall() {
    if (isShowing) {
        appMsg.style.opacity = 0;
        isShowing = false;
        setTimeout(onShake, 2000);
        return;
    }
}

