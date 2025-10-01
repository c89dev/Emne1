let numbers = [];
let inputDiv = document.getElementById("input");
let statsDiv = document.getElementById("stats");

view();

function addNumber(inputTag) {
    numbers.push(parseInt(inputTag.value))
    inputTag.value = '';
    view();

}

function calcStats(){
    let stats = {};
    stats.min = numbers[0];
    stats.max = numbers[0];
    stats.sum = 0;
    for (let n of numbers) {
        if (n < stats.min) stats.min = n;
        if (n > stats.max) stats.max = n;
        stats.sum += n;
    }
    stats.count = numbers.length;
    stats.avg = stats.sum / stats.count;
    
    return stats;
}

function view() {
    const stats = calcStats();
    let inputHtml = `<input type="number" onkeydown="
    if (event.code === 'Enter') addNumber(this);"/>`;
    let numbersHtml = `<ul>${numbers.map(tagAsLi).join('')}</ul>`;
    
    
    inputDiv.innerHTML = inputHtml;
    inputDiv.innerHTML += numbersHtml;

    let statsHtml = `
    <table>
        <tr><td>Min</td><td>${stats.min}</td></tr>
        <tr><td>Max</td><td>${stats.max}</td></tr>
        <tr><td>Sum</td><td>${stats.sum}</td></tr>
        <tr><td>Avg</td><td>${stats.avg}</td></tr>
        <tr><td>Count</td><td>${stats.count}</td></tr>
    </table>
    
    `
    statsDiv.innerHTML = statsHtml;
}

//Fun utility
function tagAsLi(n) {
    return `<li>${n}</li>`
}



