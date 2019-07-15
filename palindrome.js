function palindrome(str) {

    var string = str;
    var reversedString = "string";

    //strip  non-alphanumeric characters
    string = string.replace(/[^A-Za-z0-9]/g, '');

    string = string.toLowerCase();

    //function to reverse string
    function reverse(s) {
        return s.split('').reverse().join('');
    }

    reversedString = reverse(string);

    //check that original and reverted are the same
    if (string == reversedString) {
        return true;
    } else {
        return false;
    }

}
palindrome("toto")