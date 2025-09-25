let shop = document.getElementById("cart");
let cart = [];
drawCart();
let currentInput = document.getElementById("inputField");

function drawCart(){
    let html = /*HTML*/`
    <input onchange="updateInput(this.value)" id="inputField" 
    placeholder="Buy anything you dream off!">
    <button onclick="addToCart()">Add to Cart</button>
    <br>
    ${cart}
    `
    shop.innerHTML = html;
}

function updateInput(value){
    currentInput.value = value;
}

function addToCart(){
    cart.push(currentInput.value);
    drawCart();

}