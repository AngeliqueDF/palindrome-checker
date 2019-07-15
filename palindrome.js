//get launch button
launchButton = document.getElementById("launchButton");

const palindrome = () =>{
    // var string = document.getElementById("string").value;
    var string = document.getElementById('stringInput').value;
    //initialize variable for reversed version of string entered
    var reversedString = "string";

    //boolean that will hold and display palidrome() result on page
    var result = true;
    //element that will display result
    displayResult = document.getElementById("result");

    //strip  non-alphanumeric characters
    string = string.replace(/[^A-Za-z0-9]/g, '');
    
    string = string.toLowerCase();

    //function to reverse string
    function reverse(s) {
        return s.split('').reverse().join('');
    }
    reversedString = reverse(string);

    //display true/false in #result, returned value from palindrome call
    if (string == reversedString) {//check whether original and reverted are the same
        result = true
        displayResult.innerHTML = "true";
    } else {
        displayResult.innerHTML = "false";
    }
}

//listen for click event on launch button
launchButton.addEventListener("click", palindrome);