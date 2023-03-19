document.write("appples " + 5);             //utilizes string  + number

document.write("<br/>" + 4e213);                //displays infinity
document.write("</br>" + -4e213 + "</br>");        //displays negative infinity
document.write(7 > 9);                      //returns boolean false
document.write("</br>");                    //line break
document.write(10 < 11);                      //returns boolean true

console.log(2 + 2);                         //displays result in console
console.log( 7 > 9);                        //displays boolean in console
document.write("</br>");                    //line break
document.write(23 == 20 + 3);               //returns boolean true using double equal
document.write("</br>");                    //line break
document.write(23 == 22 - 4);               //returns boolean false using double equal
document.write("</br>");                    //line break
document.write("</br>");                    //line break
X = 15;                                     //assigning value to variable
Y = 10 + 5;                                 //assigning value to variable
document.write(X === Y);                    //returns boolean true using triple equal
document.write("</br>");                    //line break

A = 7;                                      //assigning value to variable
B = "CAT";                                  //assigning value to variable
document.write(A === B);                    //returns boolean false using triple equal
document.write("</br>");                    //line break

C = 7;                                      //assigning value to variable
D = "7";                                    //assigning value to variable
document.write(C === D);                    //returns boolean false using triple equal
document.write("</br>");                    //line break

E = "DOG3";                                 //assigning value to variable
F = "CAT3";                                 //assigning value to variable
document.write(E === F);                    ///returns boolean false using triple equal
document.write("</br>");                    //line break
document.write("</br>");                    //line break

G = 78;                                     //assigning value to variable
H = 22;                                     //assigning value to variable
K = G + H;                                  
document.write(K > 89 && G > H);            //returns boolean true using AND
document.write("</br>");                    //line break

document.write(K > 100 && G > H);           //returns boolean false using AND
document.write("</br>");                    //line break

function not_Function() {                   //Utilizes NOT operator
    document.getElementById("Not").innerHTML = ! ( 5 > 10 );
}

document.write( 7 > 6 || 9 < 7);            //OR operator
