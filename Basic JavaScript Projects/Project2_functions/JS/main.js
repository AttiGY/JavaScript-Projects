function My_First_Function () {                                 //Defining a function and naming it
    var str = "This is the button text!";                       // Defining a variable and naming it a string value
    document.getElementById("Button_Text") .innerHTML = str;    //Putting the value
                                                                //of the variable into the HTML elementFromPoint
                                                                //with the "Button_Text" id
    
  }

  function HiddenMessage() {
    var sentence = "Good boy";                                  // creates variable
    sentence += " following orders :) !";                       //adds variable with *= operator
    document.getElementById("Concatenate").innerHTML = sentence //using document.getElementById
  }