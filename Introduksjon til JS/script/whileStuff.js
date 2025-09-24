function drawWhileDemo() {

}

multiplyBy2()

function multiplyBy2() {
    let number = 2;
    while (number <= 100) {
        number = number * 2;
        document.getElementById("while").innerHTML += number + ' ';
    }
}

function getFirstWord(){
    let text = 'Superman flyr meget raskt'
    let separator = '';
    let firstWord = '';
    let index = 0;

    while(!separator == ' '){
        firstWord += text.charAt(index)
        index++;
    }
}