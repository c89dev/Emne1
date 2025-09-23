let vowelApp = document.getElementById("vow");
let inputArr;
let aCont = [];
let eCont = [];
let iCont = [];
let oCont = [];
let uCont = [];
let yCont = [];

vowelDraw();

function vowelSort(userInput) {
    inputArr = userInput.toLowerCase().split('');

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
    console.log(aCont.length + " A's");
    console.log(eCont.length + " E's");
    console.log(iCont.length + " I's");
    console.log(oCont.length + " O's");
    console.log(uCont.length + " U's");
    console.log(yCont.length + " Y's");
    vowelDraw();

}

function vowelDraw() {
    let html = /*HTML*/`
    <input onchange="vowelSort(this.value)" 
    placeholder="A word or sentence">
    <br>
    ${aCont.length} A's,
    ${eCont.length} E's,
    ${iCont.length} I's,
    ${oCont.length} O's,
    ${uCont.length} U's,
    ${yCont.length} Y's,

    `
    inputArr = [];
    vowelApp.innerHTML = html;

}
