
//global variable
var D = 15;                             //assigning value to variable
function Divide_number() {              //naming function
    document.write(D / 5 + "<br>");     //using global variable
}
function Multiply_number() {            //naming function
    document.write (D * 10 + "<br>");   //using global variable
}
Divide_number();                        //displaying result
Multiply_number();                      //displaying result

//local variable
function Division() {                   //naming function
    var C = 10;                         //assigning value to variable
    document.write (C / 2 + "<br>");    //using local variable
}
function Incorrect() {                  //naming function
    document.write (C * D + "<br>");    //using global variable
    console.log(C * D + "<br>");        //using consol.log for debugging
}
Division();                             //displaying result
Incorrect();                            //displaying result



        //function with if statement
function Myown_Statement() {
    var Z = (new Date().getHours());        //assigning date/time values to variable
    if (Z <= 23) {                          // conditional statement
        //displaying result if condition is true
        document.getElementById("Hours").innerHTML = "We can still drink, it is not even 23:00";
    }

}

        //function with if and else statements
function Car_rent() {                                                  //naming function
    var BDinput = new Date(document.getElementById("Birth_date").value);    //assigning value to variable as "date" data type
    var Age = (new Date().getFullYear() - BDinput.getFullYear());           //determining age difference
    if (Age >= 18) {                                                        // condition
        //condition if true
        document.getElementById("response").innerHTML = "You are allowed to rent a car with us";
    }
    //condition if false
    else {
        document.getElementById("response").innerHTML = "Sorry, you are not old enough to rent a car from us";
    }
}

        //time function from slides with else... if
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}