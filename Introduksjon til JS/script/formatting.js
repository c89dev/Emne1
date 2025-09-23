let enteredName;

function nameFormat(input){
    let name = input;
    enteredName = name;

    let firstLetter = enteredName.at(0).toUpperCase();
    let lowercase = enteredName.substring(1).toLowerCase();
    result = firstLetter + lowercase;
    console.log(result);
    document.getElementById("greetName").innerHTML = `Hello, ${result}.`
    return result;
}