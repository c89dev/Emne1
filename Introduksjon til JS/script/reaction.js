let reactApp = document.getElementById("react");
let gameRunning = false;
let gridSize = 25;
let activeLamp;
let startTime;
let finishTime;
let spentMilliseconds;
let spentSeconds;
let prevTime;
let currentBest = 0;

drawReact();

function randNum() {
    let rand = Math.floor(Math.random() * 25);
    return rand;
}

function drawReact() {
    let targetsHtml = '';
    let menuHtml = '';
    
    for (i = 0; i < gridSize; i++) {
        targetsHtml += /*HTML*/`
        <div onclick="clickIt(this.id)" class="lamp" id="lamp-${i}"></div>
        `
    }
    
    menuHtml = /*HTML*/`
    <div id="reactMenu" style="height: 150px; position: relative; top: 20px;">
    <button onclick="startGame()">START</button>
    <button onclick="stopGame()">STOP</button>
    BEST:
    <br>
    ${currentBest}
    </div>
    `
    reactApp.innerHTML = targetsHtml + menuHtml;
}

function clickIt(id) {
    if (id === activeLamp) {
        activeLamp = 0;
        finishTime = new Date().getTime();
        spentMilliseconds = Math.floor(finishTime - startTime);
        spentSeconds = spentMilliseconds / 1000;
        document.getElementById(id).classList.remove("lampOn");
        console.log(spentMilliseconds);
        prevTime = spentSeconds;
        setTimeout(activateRandomLamp, 700);
    }
    if (currentBest == 0 || prevTime < currentBest) {
        currentBest = prevTime;
        drawReact();
        console.log("NEW PB");
    }
}

function activateRandomLamp() {
    activeLamp = 'lamp-' + randNum();
    document.getElementById(activeLamp).classList.add("lampOn");
    startTime = new Date().getTime();
}

function startGame() {
    if (!gameRunning) {
        gameRunning = true;
        setTimeout(activateRandomLamp, 1000);
        console.log("start");
    }
}

function stopGame() {
    if (gameRunning) {
        gameRunning = false;
        drawReact();
        console.log("stop");
    }
}