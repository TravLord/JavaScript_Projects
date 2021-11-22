document.write(typeof 3);  //TYPEOF OPERATOR EXAMPLE
document.write(' ');

document.write("49" + 16); // COERCION

function nanf() {
document.getElementById("nan").innerHTML = isNaN('string');  //NAN EXAMPLE
}
document.write(' ');

document.write(4E310);   // INFINITY
document.write(' ');


document.write(-5e312); // NEGATIVE INFINITY
document.write(' ');

document.write(15>3);  // GREATER THAN BOOLEAN 1ST= TRUE 
document.write(' ');


document.write(15<3);  // LESS THAN BOOLEAN 2ND=FALSE
document.write(' ');


console.log(48 +47);   // CONSOLE DISPLAY EXAMPLES
console.log(74>77);    // CONSOLE LOG BOOLEAN 3RD = TRUE
document.write(' ');


document.write(12==12);   // EQUAL TO OPERATOR EXAMPLES 
document.write(' ');
document.write(12==14);   //EQUAL TO OPERATOR 
document.write(' ');


var bird = "fly";    // TRIPLE EQUAL SIGN COMPARISONS
var bat = "fly";
document.write(bird === bat);   //DATA TYPE SAME 
document.write(' ');

var x = 5;        // DIFFERENT DATA TYPE AND DIFFERENT VALUE
var y = "dog";
document.write(x===y);
document.write(' ');



var a = 34;         // DIFFERENT DATA TYPE SAME VALUE
var b = "34";       
document.write(a===b);
document.write(' ');


var e = 5;       // SAME DATA TYPE DIFFERENT VALUE FOR BOTH
var f= 6;
document.write(e===f);
document.write(' ');
document.write(5>2 && 5>2);   // AND BOOLEAN OPERATOR TRUE EXAMPLE
document.write(' ');

document.write(5>2 && 2>5); // AND BOOLEAN OPERATOR FLASE EXAMPLE
document.write(' ');

document.write(5>2 || 2>5); // OR BOOLEAN OPERATOR TRUE EXAMPLE
document.write(' ');
document.write(5>6 || 5>6); // OR BOOLEAN OPERATOR FALSE EXAMPLE
document.write(' ');

function not_op() {
    document.getElementById("not").innerHTML = ! (5>3);  //NOT OPERATOR FALSE EXAMPLE
}
function not_op2() {
    document.getElementById("not2").innerHTML = ! (5<3);  // NOT OPERATOR TRUE EXAMPLE 
}





