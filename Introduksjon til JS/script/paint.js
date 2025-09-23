var currentColor;
const col1 = "red";
const col2 = "green";
const col3 = "blue";
let selected = null;

colorIndicator();

function getColor(element){
    currentColor = element.style.backgroundColor;
    element.style
    console.log("current color is: ",currentColor);
}

function setColor(target){
    target.style.backgroundColor = currentColor;
}

function colorIndicator(){

    document.querySelectorAll(".colorCircles").forEach(el => {
        el.addEventListener("click", function(){
            if (selected) {
                selected.classList.remove("outlined");
            }
            this.classList.add("outlined");
            selected = this;
            console.log(selected);
        })
    })

}
