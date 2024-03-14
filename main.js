// Number Analyzer

// HTML Elements
let numEl = document.getElementById('numInput');

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);

// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);
    // CALLING FUNCTIONS TO EXECUTE 
    document.getElementById("sign").innerHTML = getSign(numInput)
    document.getElementById("even-odd").innerHTML = evenOrdOdd(numInput)
    document.getElementById("multiple").innerHTML = multipleOf10(numInput)
    document.getElementById("digits").innerHTML = numDigits(numInput)
    document.getElementById("prime").innerHTML = isPrime(numInput)
    // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)

    //**BONUS**//
    //document.getElementById('prime').innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.


// Analyze Functions
function getSign(num) {
  if (num > 0) {
    signOut = "Positive";
  } else if (num < 0) {
    signOut = "Negative";
  } else {
    signOut = "Zero";
  }
  return signOut
}


// FUNCTION EVEN / ODDD
function evenOrdOdd(num) {
    num % 2 === 0 ? output = "Even" : output = "Odd";
    return output

}

// FUNCTION MULTIPLE OF 10
function multipleOf10(num) {
    num % 10 === 0 ? output = 'True' : output = 'False';
    return output

}

// NUMBER OF DIGITS, removing - to count length of number
function numDigits(num) {
   return num.toString().replace("-", "").length;
}
    

function isPrime(num) { 
    let isPrimeNumber = true
    // BETWEEN 2 ands square roof of number input
   for (let i = Math.round(Math.sqrt(num)); i > 0 ; i--) {
        if (num % i === 0 && i!=1) {
            isPrimeNumber = false; 
            return isPrimeNumber  
        }
   }
   return isPrimeNumber
}