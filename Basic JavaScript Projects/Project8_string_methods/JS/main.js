
    //concat method
function full_Sentence() {
    var part_1 = "I have ";                             //assigning string to variable
    var part_2 = "made this";                           //assigning string to variable
    var part_3 = "into a complete ";                    //assigning string to variable
    var part_4 = "sentence.";                           //assigning string to variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //connecting strings
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}



    //Slice method
function slice_Method() {
    var Sentence = "Go Johnny, go go! Johnny B good!";    //assigning string to variable
    var Section = Sentence = Sentence.slice(17);         //determining how many caracters not to display
    document.getElementById("Slice").innerHTML = Section;
}
    //String_toUppercase method
function String_toUpperCase() {
    var Text1 = "Every words in this sencece are in uppercase";         //assigning string to variable
    var UpperSentence = Text1.toUpperCase();                            //utilising toUpperCase method
    document.getElementById("Uppercase").innerHTML = UpperSentence;     //returning value in uppercase
}

        //Search method
function Search_Function() {
    //assigning string to variable
    var Text2 = "“For instance, on the planet Earth, <br>man had always assumed that he was more intelligent <br>than dolphins because he had achieved so much—the wheel, <br>New York, wars and so on—whilst all the dolphins had ever done was muck about <br>in the water having a good time. <br>But conversely, the dolphins had always believed <br>that they were far more intelligent than man—<br>for precisely the same reasons.” <br>    ― Douglas Adams, The Hitchhiker's Guide to the Galaxy ";
    var position = Text2.search("dolphins"); //assigning the word to search
    document.getElementById("Search").innerHTML = position;         // returning position of search
}

        //toString() method
function string_Method() {
    var X =18965;                                                           //assigning value to variable
    document.getElementById("NumbToString").innerHTML = X.toString();       //utilising toString method
}

    //toPrecision method
function preci_Method() {
    var D = 123.896543218548;                                            //assigning value to variable
    document.getElementById("Precision").innerHTML = D.toPrecision(6);  //utilising toPercision method
}

    //toFixed method
function Fixed_Method() {
    var Uinput = Number(document.getElementById("Numb").value);             // converting string to number
    document.getElementById("Rounding_num").innerHTML = "Rounding up full number: " + Uinput.toFixed();     //using toFixed method to round up full number
    document.getElementById("Rounding_decim").innerHTML = "Rounding up decimals: "  + Uinput.toFixed(2);    //using toFixed method to round up decimals only
}
