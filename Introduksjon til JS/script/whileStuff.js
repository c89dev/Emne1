function drawWhileDemo() {

}

// multiplyBy2()

function multiplyBy2() {
    let number = 2;
    while (number <= 100) {
        number = number * 2;
        document.getElementById("while").innerHTML += number + ' ';
    }
}



function getFirstWord() {
    let text = 'Superman flyr meget raskt'
    let separator = '';
    let firstWord = '';
    let index = 0;

    while (separator !== ' ') {
        if (text.charAt(index) === ' ') {
            separator = ' ';
        }
        firstWord += text.charAt(index);
        index++;
    }
    document.getElementById("firstWord").innerHTML += firstWord;
}

function matchTwoRands(){
    let numA = randNumGen();
    let numB = randNumGen();
    let match = false;

    while(!match || numA !== numB){
        if (numA === numB){
            match = true;
        }
        else{
            numA = randNumGen();
            numB = randNumGen();
        }
    }
    document.getElementById("while").innerHTML += `Match found! ${numA} and ${numB} are twinz`;
    console.log(numA, "and", numB);
}