function getAge(yearOfBirth){
    let todaysDate = new Date();
    year = todaysDate.getFullYear();
    age = year - yearOfBirth;
    console.log(age);

    let html = /*HTML*/ `You are ${age} years old`
    document.getElementById("ageResult").innerHTML = html;
}