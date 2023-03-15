function Addition() {                                                       //Defining a function and naming it
  var addition = 175 + 489;                                               // Defining a variable
  document.getElementById("Math").innerHTML = "175 + 489 = " + addition; //using document.getElementById 
}


function Subtraction() {                                                              //Defining a function and naming it
      var Subtraction = 9564 - 4568;                                                 //substracts numbers
      document.getElementById("SubMath").innerHTML = "9564 - 4568 = " + Subtraction //displays result
}


function Multiplication() {                                                     //Defining a function and naming it
  var simple_Math = 42 * 45;                                                   //multiplies the numbers
  document.getElementById("MultiMath").innerHTML = "42 * 45 = " + simple_Math //displays result
}

function Division() {                                                         //Defining a function and naming it
  var simple_Math = 42 / 45;                                                 //divides numbers
  document.getElementById("DivMath").innerHTML = "42 / 45 = " + simple_Math //displays result
}


function Multioperations() {                                                //Defining a function and naming it
  var simple_Math = (75 + 28) * 22 / 2 - 789;                             //calculates the result
  document.getElementById("MultipleMath"). innerHTML = "75 + 28 multiplied by 22, divided by 2 and subtracted by 789 = " + simple_Math; //displays result
}

function modulus_Operator () {                                                                              //Defining a function and naming it
    var simple_Math = 75 % 16;
    document.getElementById("ModOpMath").innerHTML = "When you divide 75 by 16 you have a remainder of: " + simple_Math; //displays result
    }

function negation_Operator () {                                  //Defining a function and naming it
      var x = 10;                                               //assigning value to variable
      document.getElementById("UnaryOperator").innerHTML = -x; //displays result
      }


      

      
 // this increments 7 to 8
function Increment() {
var X = 7;                //assigning value to variable
var result1 = X++;        //increases value by one 
document.getElementById("IncrementOperator").innerHTML = result1;
}


// this decrements 6 to 5
function Decrement() {
var D = 6;                  //assigning value to variable
var result2 = D--;          //decreases value by one
document.getElementById("DecrementOperator").innerHTML = result2;
}

//showing random number in alert window
window.alert ("Randomly generated number between 1 and 50: " + Math.random() * 50);


      // Calculator
  function Calc() {
  var A = Math.min(10, 22, 41);       //this finds the smallets number out of three
  var B = Math.max(7, 9, 10);         //this finds the highest number out of three
  var C = A * B                       //multiplies the numbers
  
  //displays result
document.getElementById("Calculator").innerHTML ="The result of multiplying the smallest number out of 10, 22, 41 by the highest number out of 7, 9, 10 is: " + C;
  }