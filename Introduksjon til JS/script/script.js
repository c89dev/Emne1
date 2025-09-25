const outputDiv = document.getElementById("myDivId");
var number = 5; 
var floatnumber = 5.5; //float
var text = "en liten tekstbit"; //string
var enkelTegn = 'a'; //char
var IsActive = true; //boolean
var numToShow = 0;

const test1 = "yoyoyo"
let test2 = "lighty"
var test3 = "zing"



function updateView(){
    document.getElementById("app").innerHTML = `
    
        
    `
}


function scopeTest(){
    var hello = "var Hello!"
    let hello2 = "let Hello!"
    console.log(hello,hello2);

    {
        var yo = "var yo i obj"
        let yo2 = "let yo2 i obj"
        console.log(yo,yo2)
    }

    console.log(yo);
    console.log(yo2);

}


function changeDivText() {
    outputDiv.innerHTML = 'Howdy';
}

function changeBgColor() {
    myDivId.classList.add('justRed');
}

function restoreBgColor() {
    myDivId.classList.remove('justRed');
}

function restoreDivText() {
    outputDiv.innerHTML = '(tom)';
}

function setNum(chosenNum){
    numToShow = chosenNum;
    outputDiv.innerHTML = numToShow;
}

function secondNum(){
    var number2 = 2;
    numToShow = numToShow + number2;
    outputDiv.innerHTML = numToShow;
    console.log(numToShow, " <- numToShow -- number2 -> ", number2);
}

function increaseNum(){
    numToShow++;
    outputDiv.innerHTML = numToShow;
}

function decreaseNum(){
    numToShow--;
    outputDiv.innerHTML = numToShow;
}

// LIGHTBULB

var switchOn = false;
        drawBulb()
        function drawBulb(){
            document.getElementById("bulbDiv").innerHTML = `
            <div id="bulb" onclick="toggleLight(this)"></div>
            `
        }

        function toggleLight(light){
            if(!switchOn){
                light.style.backgroundColor = "yellow";
                switchOn = true;
                console.log("Light on!")
                return;
            }
            else if(switchOn){
                light.style.backgroundColor = "black";
                switchOn = false;
            }
            console.log("Light off!");
        }
