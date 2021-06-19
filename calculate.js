
function showResults(results) {
    document.getElementById("result").innerHTML = results;
  }
  
//   function ModBy(number1, number2){
//       num1 = number1.value;
//       num2 = number2.value;
//       showResults(((num1 % num2)+num2)%num2);
//   }
  function multiplyBy(number1, number2) {
    num1 = number1.value;
    num2 = number2.value;
    showResults(num1 * num2);
  }
  
  function divideBy(number1, number2) {
    num1 = number1.value;
    num2 = number2.value;
    showResults(num1 / num2);
  }
  
  function additionBy(number1, number2) {
    num1 = parseInt(number1.value, 10);
    num2 = parseInt(number2.value, 10);
    showResults(num1 + num2);
  }
  
  function subtractionBy(number1, number2) {
    num1 = parseInt(number1.value, 10);
    num2 = parseInt(number2.value, 10);
    showResults(num1 - num2);
  }
  
  function actionClicker() {
    let number1 = document.getElementById("firstNumber");
    let number2 = document.getElementById("secondNumber");
    validateNumber(number1);
    validateNumber(number2);
    var attribute = this.getAttribute("data-myattribute");
    var expr = attribute;
    switch (expr) {
      case 'multiply':
        multiplyBy(number1, number2);
        break;
      case 'division':
        divideBy(number1, number2);
        break;
      case 'subtract':
        subtractionBy(number1, number2);
        break;
      case 'addition':
        additionBy(number1, number2);
        break;
      default:
        console.log('Sorry, we do not find ' + expr + '.');
    }
  }
  
  function showValidationMessage(message) {
    alert(message);
  }
  
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  function isEmpty(n) {
    return n === "";
  }
  
  function isInRange(n) {
    if (isNumeric(n) && !isEmpty(n)) {
      num = parseInt(n, 10);
      return num >= -9999 && num <= 9999;
    }
    return false;
  }
  
  function validateNumber(el) {
    let hasError = false;
    el.classList.remove("has-error");
    // add your validation
    let message = "get stuff better";
    if (!isNumeric(el.value)) {
      message = "Not a number.";
      hasError = true;
    }
    if (isEmpty(el.value)) {
      message = "Not a number, cannot be empty.";
      hasError = true;
    }
    if (hasError) {
      el.classList.add("has-error");
      showValidationMessage(message);
    }
  }
  
  function modifyNumbers(event) {
    let el = event.target;
    validateNumber(el);
  }
  var num1 = document.getElementById("firstNumber");
  var num2 = document.getElementById("secondNumber");
  var buttons = document.getElementsByClassName('actions');
  // add event listener to buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', actionClicker, false);
  }
  num1.addEventListener("change", modifyNumbers, false);
  num2.addEventListener("change", modifyNumbers, false);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// function Addition(){
//     num1 = document.getElementById("First Number").nodeValue;
//     num2 = document.getElementById("Second Number").nodeValue;
//     document.getElementById("Result").innerHTML = num1 + num2;
// }

// function Substraction(){
//     num1 = document.getElementById("First Number").nodeValue;
//     num2 = document.getElementById("Second Number").nodeValue;
//     document.getElementById("Result").innerHTML = num1 - num2;
// }

// function Multiplication(){
//     num1 = document.getElementById("First Number").nodeValue;
//     num2 = document.getElementById("Second Number").nodeValue;
//     document.getElementById("Result").innerHTML = num1 * num2;
// }

// function Division(){
//     num1 = document.getElementById("First Number").nodeValue;
//     num2 = document.getElementById("Second Number").nodeValue;
//     document.getElementById("Result").innerHTML = num1 / num2;
// }