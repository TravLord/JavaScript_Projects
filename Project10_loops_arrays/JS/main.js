// WHILE LOOP FUNCTION EXAMPLE  //

function call_loop() {
    var space = "";
    var X = 7;
    while (X < 14) {
        space += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = space;
}

// STRING LENGTH FUNCTION EXAMPLE //

function length_func() {
var dog="mississippi";
var test_length = dog.length;
document.getElementById("str_length").innerHTML = test_length;
}
var numbers = [3,7,9,10]
var show="";
var x;

// FOR LOOP EXAMPLE//

function first_for() {
    for (x = 0; x < numbers.length; x++) {
        show += numbers[x] + "<br>";     
    }
    document.getElementById("nums").innerHTML= show;
}

// ARRAY FUNCTION EXAMPLE //

function array_function() {
    var flavor_profiles = []
    flavor_profiles[0] = "nutty";
    flavor_profiles[1] = "earthy";
    flavor_profiles[2] = "sweet";
    flavor_profiles[3] = "oaky";
    document.getElementById("array").innerHTML = "This wine has " + flavor_profiles[1] + " notes on the front end and a "
    + flavor_profiles[2] + " finishing flavor.";
}
// CONSTANT KEYWORD EXAMPLE //

function constant_function() {
    const customer = {status:"active", age: "27", account_number: "8384"};
    customer.date_of_birth = "06/09/88";
    customer.age = "33";
    document.getElementById("constant").innerHTML = customer.age + " " + customer.date_of_birth;
}

// LET KEYWORD EXAMPLE //

let inventory1 = "Prosecco "
document.write(inventory1);
function letEx() {
    let inventory1 = "Champagne";
    document.getElementById("letF").innerHTML = inventory1;

}
// RETURN FROM A FUNCTION EXAMPLE //

function return_state(x,y) { 
    return x + y;
}   
 var hold = return_state(7,7);
 document.write(hold);
// LET KEYWORD OBJECT CREATION EXAMPLE // 
 let client = {
     status: "active",
     location: "utah,",
     dob: "03/07/1979",
     origin: "business",
     description: function() {
         return "This customers status is " + this.status + " located in " + this.location +
         " born: " + client.dob + " ordering for a " + this.origin; 
     }
 };
 function client_func() {
 document.getElementById("cust").innerHTML = client.description();
 }
// BREAK LOOP EXAMPLE //

function break_loop() {
    var x = 0;
    var spacr = "";
    for (var x = 0; x < 20 ; x++) {
        if (x === 12) {break;} 
        spacr += "breaking...soon..." + x +"<br>";  
        document.getElementById("break").innerHTML = spacr;  
        }
    
    }
    // CONTINUE LOOP EXAMPLE//
    
    function continue_loop() {
        var y = 0;
        var spac = "";
        for (var y = 0; y < 7 ; y++) {
        if (y === 2) {continue;} 
        spac += "skipping over step 2 please.." + y +"<br>";  
        document.getElementById("continue").innerHTML = spac;
    }
}
