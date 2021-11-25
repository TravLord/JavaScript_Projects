

var count = 13;         // Global variable example
function Global_V() {
    document.write(count + 97);
    document.getElementById("Global_var").innerHTML = "Global variable found";
}

function Local_V() {    // Local variable example
    var count2 = 44;
    document.write(count2 + 56);
}
function Local_V2() {          //Debug example change document.write to console.log to test
    document.write(count2 + 72);
    document.getElementById("Local_V").innerHTML = "Won't display Local variable";
}

function find_date() {          //  Date function example
    if (new Date().getHours() < 21) {
        document.getElementById("date").innerHTML = "Not time for bed yet";
    }
}
function if_state() {   // If statement example
var test = 14;
var best = 17;
if (test < best) {
    document.getElementById("if").innerHTML= "best is always best";
}
}

function cal_function() {   // personal written if else statement
    cals = document.getElementById("cals_lost").value;
    if (cals <= 700) {
        calories = "Keep working, go on a power walk!";
    }
    else {
        calories = "Great work, you've burned over 700 calories today!!";
    }
    document.getElementById("how_many_cals").innerHTML = calories;
}

function whats_the_time() {     //  Time function example 
    var time = new Date().getHours();
    var response;
    if (time < 12 == time > 0) {
        response ="Good morning , suns out guns out... oh gawd!";
    }
    else if (time < 12 == time > 0) {
        response = "Its already afternoon, how?  Ripples in space time from merging black holes?";
    }
    else {
        response = "It's night ya'll";
    }
    document.getElementById ("what_time").innerHTML = response;

    
}