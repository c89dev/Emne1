let app = document.getElementById("checkEmail");
let error = document.getElementById("error");
let mailToCheck;
let splitOne;
let splitTwo;

drawCheckEmail();
function drawCheckEmail() {
    let html = /*HTML*/`
    <input onchange="checkEmail(this.value)" 
    type="text" placeholder="Enter an Email Adress">
    `
    app.innerHTML = html;
}

function checkEmail(input) {
    mailToCheck = input;
    let checkOne = false;

    if (mailToCheck.includes('@') && !mailToCheck.includes(' ') && mailToCheck.includes('.')) {
        checkOne = true;
        splitOne = mailToCheck.split('@');
        splitTwo = mailToCheck.split('.');
    }                                                                                                               //💀
    if (checkOne && splitOne[0] !== '' && splitOne[1].includes('.') && splitOne[1].length > 3 && splitTwo[1].length > 1) {
        error.innerHTML = "Eh, close enough.";
    }
    else {
        error.innerHTML = ''
        error.innerHTML += `<img style="width: 86px;" src="./media/error.gif">`
    }

}

