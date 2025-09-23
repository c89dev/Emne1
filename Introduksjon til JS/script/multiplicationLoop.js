multiplier()
function multiplier() {
    multiplyApp = document.getElementById("multiplyApp");
    let number = 1;
    let seq = 2;
    for (let i = 0; i < 10; i++) {
        number = number * 2;
        multiplyApp.innerHTML += number + ',';
        number = seq;
        seq++;
    }
    //💀
}