function add_op() {               //ADDITION RETURNING VALUE TO HTML ELEMENT
    var result = 97 + 46;
    document.getElementById("Math").innerHTML= "97+46 =" + result;
}

function sub_op() {
   var result = 47 - 29;
    document.getElementById("subtr").innerHTML="47-29= " + result;
}
function div_op() {      // DIVISION RETURNING VALUE TO HTML ELEMENT
    var result = 100 / 25;
    document.getElementById("division").innerHTML=" 100/25= " + result;

}
function multp_op() {        //MUTIPLICATION RETURNING VALUE TO HTML ELEMENT
    var result = 25 * 25;                  
document.getElementById("multp").innerHTML=" 25*25= " + result;
}

function combo_op() {          // MULTIPLE MATH OPERATIONS
    var result = 14 - 11 * 44 / 3;
    document.getElementById("combo").innerHTML= " 14 - 11 * 44 / 3= " + result;

}
function modulus_op() {     // MODULUS DISPLAYING THE REMAINDER OF DIVISION
    var result = 25 % 10;
    document.getElementById("mod_op").innerHTML = "When you divide 25 by 10 you have a remainder of: " + result;  
}

function negation_op() {   //NEGATION OPERATOR, MAKES NUMBER NEGATIVE 
    var result = 42;
    document.getElementById("nego_op").innerHTML =" Negation operator makes this number negative " + -result;

}
var Increment = 15; 
Increment++;
document.write(Increment);    // INCREMENT OPERATOR
document.write(" ");

var Decrement = 12;
Decrement--;                   //DECREMENT OPERATOR    // EACH OF THESE EXAMPLES WILL BE LOCATED ABOVE ALL OF THE HTML ELEMENTS
document.write(Decrement);
document.write(" ");

window.alert(Math.random() * 1000000);  // MATH RANDOM METHOD

document.write(Math.sqrt(25));  // MATH SQUARE ROOT OBJECT METHOD

function math_rand() {     // RANDOM NUBMER FUNCTION
    result = Math.random() * 100000000000;
    document.getElementById("Random").innerHTML = "Random number between 1 and 100000000000 = " + result;
}