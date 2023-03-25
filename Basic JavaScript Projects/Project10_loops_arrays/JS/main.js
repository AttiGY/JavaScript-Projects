

//loop function
function Call_Loop() {                          
    var Total = 10;             //assigining stating value
    var Y = 1;                  //defining the value of changes
    var output = "";            //empty sting variable

    //loop
    while (Total > 0) {
        output += Total + "<br>";
        Total = Total - Y;
    }
    document.getElementById("Loop").innerHTML = output;         //displaying result
}

//lenght property 
function Sentence_Length() {
    sentence = "If you click the button, you will see how many caracters it contains.";     //string
    result = sentence.length;                                                               //utilising lenght property
    document.getElementById("Length").innerHTML = result;                                   //displaying result
}

//for_Loop function
function for_Loop() {
    var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];           //array
    var X;                                                                                          //variable
    var result = ""                                                                                 //empty string variable
for (var X = 1; X < instruments.length; X += 2) {                                                   //for loop
    result += instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML ="Every second instrument from the list:<br><br>" +  result;
}

        //array function
function array_Function() {
    var Fruits = ["apple", "banana", "orange"];                     //array
    
    document.getElementById("Array").innerHTML = "The name of this fruit is: " + Fruits [2];
}


 // object created with "let"
function Warbird() {
let fighterplane = {
    model: "P-51 Mustang",
    country: "United States",
    engine: "Rolls-Royce Merlin",
    armament: ["six .50 caliber machine guns", "bombs or rockets"],
    topSpeed: 437, 
    range: 1650,
    crew: 1,
  };

  document.getElementById("fighterplane").innerHTML = "One of the most significant WWII era fighter plane was the " + fighterplane.model + " deveoped by " + fighterplane.country;

}