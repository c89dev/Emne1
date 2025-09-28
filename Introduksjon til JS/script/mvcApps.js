//Model

let mvcApp = document.getElementById("mvcApp");
let thing1 = '____';
let thing2 = '____';
let adj1 = '____';
let adj2 = '____';
let thing3 = '____';
let thing4 = '____';
let adj3 = '____';
let adj4 = '____';

//View

updateView();
function updateView() {
    mvcApp.innerHTML = /*HTML*/ `<div
    style=" border: 2px dotted black;
    padding: 5px;
    background-color: lightgrey;"> Once upon a time, there was a ${thing1}, 
    that came ${adj1} in on a ${thing2}. They saw a ${thing3} that was previously used for ${adj3}. 
    </div>
    <br>
    <div id="wordOpt">
    <button onclick="changeThing1(this.textContent)">Potato</button>
    <button onclick="changeThing2(this.textContent)">Missile</button>
    <button onclick="changeAdj1(this.textContent)">Running</button>
    <button onclick="changeAdj2(this.textContent)">Yeeting</button>
    <button onclick="changeThing3(this.textContent)">Coconut</button>
    <button onclick="changeThing4(this.textContent)">Seahorse</button>
    <button onclick="changeThing5(this.textContent)">Windmill</button>
    <button onclick="changeThing6(this.textContent)">Cabinet</button>
    <button onclick="changeAdj3(this.textContent)">Flying</button>
    <button onclick="changeAdj4(this.textContent)">Barging</button>
    </div>
    `
}


//Controller :skull emoji:

// function editStory(thing1Input,thing2Input,adj1Input,adj2Input){
//     thing1 = thing1Input;
//     thing2 = thing2Input;
//     adj1 = adj1Input;
//     adj2 = adj2Input;

// }

function changeThing1(innerText) {
    thing1 = innerText;
    updateView();
}
function changeThing2(innerText) {
    thing1 = innerText;
    updateView();
}
function changeAdj1(innerText) {
    adj1 = innerText;
    updateView();
}
function changeAdj2(innerText) {
    adj1 = innerText;
    updateView();
}
function changeThing3(innerText) {
    thing2 = innerText;
    updateView();
}
function changeThing4(innerText) {
    thing2 = innerText;
    updateView();
}
function changeThing5(innerText) {
    thing3 = innerText;
    updateView();
}
function changeThing6(innerText) {
    thing3 = innerText;
    updateView();
}
function changeAdj3(innerText) {
    adj3 = innerText;
    updateView();
}
function changeAdj4(innerText) {
    adj3 = innerText;
    updateView();
}