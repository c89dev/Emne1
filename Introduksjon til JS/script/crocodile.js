
let userInput;
let score = 0;
let scoreDisplay = document.getElementById("crocScore").innerHTML;
let numA = randNumGen();
let numB = randNumGen();



function randNumGen(){
    rand = Math.floor(Math.random() * 10) + 1;
    return rand;
}

    

function crocGame(){
    
    if (numA > numB && userInput == `>`)
        score += 1;
    else if (numA < numB && userInput == `<`){
        score += 1;
    }
    else if (numA == numB && userInput == `=`){
        score += 1;
    }
    else{
        score -= 1;
    }

    document.getElementById("crocScore").innerHTML = `Points: ${score}`;
}

function crocInput(currentInput){
   let asdfg = currentInput;
   userInput = asdfg;
}

function resetCroc(){

    numA = randNumGen();
    numB = randNumGen();
    document.getElementById("numberA").innerHTML = numA;
    document.getElementById("numberB").innerHTML = numB;
    document.getElementById("crocScore").innerHTML = `Points: ${score}`;
}

