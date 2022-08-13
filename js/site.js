//Get the values from the App Page
//Starts or Controller Function
function getValues() {
    
    //Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    //Parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //We need to validate our input

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //Call generateNumbers
        let numbers = generateNumbers(startValue,endValue);

        //Call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers.");
    }
}

//Generate numbers from 'startValue' to 'endValue' once the button is pressed
//Logic Function(s)
function generateNumbers(startValue,endValue) {

    let numbers = [];

    //We want to get all numbers from start to end
    for(let index = startValue; index <= endValue; index++){
        //This will execute in a loop until index = endValue
        numbers.push(index);
    }

    return numbers;
}

//Display the numbers and mark the even bold.
//Display or View Function
function displayNumbers(numbers) {
    
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];

        let className = "";
        if (number % 2 == 0){
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}