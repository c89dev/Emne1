let revStrHtml = document.getElementById("reverse");
let revResult = '';

function reverseString(input) {
    let inputStr = input;
    for (let i = inputStr.length - 1; i >= 0; i--) {
        revResult += inputStr[i];
    }
    reverseDraw();
    revResult = '';
}

reverseDraw()
function reverseDraw() {
    let html = `
    <input onchange="reverseString(this.value)"
    placeholder="text to reverse">
    <br>
    ${revResult}
    `
    revStrHtml.innerHTML = html;
}
