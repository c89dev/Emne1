let vowelApp = document.getElementById("vow");
let vowelApp2 = document.getElementById("vow2");
let inputArr;
let inputStr;
let inputDisplay = '';
let aCont = [];
let eCont = [];
let iCont = [];
let oCont = [];
let uCont = [];
let yCont = [];

vowelArrDraw();
vowelStrDraw();

function vowelSortStr(userInput) {
    inputStr = userInput.toLowerCase();
    inputDisplay = userInput;
    for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i].includes("a")) {
            aCont.push(inputStr[i]);
        }
        else if (inputStr[i].includes("e")){
            eCont.push(inputStr[i]);
        }
        else if (inputStr[i].includes("i")){
            iCont.push(inputStr[i]);
        }
        else if (inputStr[i].includes("o")){
            oCont.push(inputStr[i]);
        }
        else if (inputStr[i].includes("u")){
            uCont.push(inputStr[i]);
        }
        else if (inputStr[i].includes("y")){
            yCont.push(inputStr[i]);
        }
    }
    console.log(inputStr);
    vowelStrDraw();
    aCont = [];
    eCont = [];
    iCont = [];
    oCont = [];
    uCont = [];
    yCont = [];

}

function vowelStrDraw() {
    let html = /*HTML*/`
    <input onchange="vowelSortStr(this.value)" 
    placeholder="A word or sentence">
    <br>
    ${inputDisplay}
    <br>
    <br>
    ${aCont.length} A's,
    ${eCont.length} E's,
    ${iCont.length} I's,
    ${oCont.length} O's,
    ${uCont.length} U's,
    ${yCont.length} Y's
    `
    vowelApp2.innerHTML = html;
}

function vowelSortArr(userInput) {
    inputArr = userInput.toLowerCase().split('');
    inputDisplay = userInput;
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == 'a') {
            aCont.push([i]);
        }
        else if (inputArr[i] == 'e') {
            eCont.push([i]);
        }
        else if (inputArr[i] == 'i') {
            iCont.push([i]);
        }
        else if (inputArr[i] == 'o') {
            oCont.push([i]);
        }
        else if (inputArr[i] == 'u') {
            uCont.push([i]);
        }
        else if (inputArr[i] == 'y') {
            yCont.push([i]);
        }
    }
    vowelArrDraw();
    inputArr = [];
    aCont = [];
    eCont = [];
    iCont = [];
    oCont = [];
    uCont = [];
    yCont = [];

}

function vowelArrDraw() {
    inputDisplay
    let html = /*HTML*/`
    <input onchange="vowelSortArr(this.value)" 
    placeholder="A word or sentence">
    <br>
    ${inputDisplay}
    <br>
    <br>
    ${aCont.length} A's,
    ${eCont.length} E's,
    ${iCont.length} I's,
    ${oCont.length} O's,
    ${uCont.length} U's,
    ${yCont.length} Y's
    `
    vowelApp.innerHTML = html;
}


