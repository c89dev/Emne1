let minutes = 0;
let seconds = 0;
let ms = 0.00;
let lap = '';
let started = false;

function countUp(){
    if (started){
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    // document.querySelector("#ms").innerHTML = ms;
    seconds++;

        if (seconds > 59){
            minutes++;
            seconds = 0;
        }
    }

}

setInterval(countUp, 1000);

function startClock(){
    started = true;
}

function stopClock(){
    started = false;
}

function resetClock(){
    started = false;
    seconds = 0;
    minutes = 0;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector("#lapDiv").innerHTML = null;


}

function lapClock(){
    document.querySelector("#lapDiv").innerHTML = minutes + ":" + seconds;
    minutes = 0;
    seconds = 0;
}
