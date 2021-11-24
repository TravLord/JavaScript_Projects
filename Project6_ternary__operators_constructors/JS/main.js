function Ride_Function(){
    var Height, Can_ride;                                 // First Ternary example replication
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52)? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {                   // Personalized age to vote condition Ternary conditional example
    var Age, Can_vote;
    Age = document.getElementById("Age").value;    
    Can_vote = (Age < 18 )? "You are too young" : "You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote";

}
  
function Vehicle(Make, Model, Year, Color) {    // Object constuctor replication example
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper", 2020 , "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk" , 2019 , "White and Black")
var Erik = new Vehicle(" Ford", " Pinto", 1971, "Mustard");
function my_function() {
    document.getElementById("keywords_and_constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored" +Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
} 

function animal(species, size, age, color) {        // First self written Constuctor utilizing this keyword
    this.animal_species = species;
    this.animal_size = size;
    this.animal_age = age;
    this.animal_color = color;

}
var cat = new animal("feline", "2.5 feet tall" , 5, "orange");      // display fuction for constructor connected to button HTML element
var dog = new animal("canine", "3 feet tall",6, "brown");
function animal_function() {
document.getElementById("new_and_this").innerHTML = "This animal is a  " + cat.animal_color +"-colored " + cat.animal_species +
" that is " + cat.animal_size + " and is " + cat.animal_age + " years old.";

}
function add_function() {                                                // nested function example
    document.getElementById("nested_function").innerHTML = one_number();
function one_number() {
    var first_number = 97;
    function add3() {first_number += 3;}
    add3(); 
    return first_number; 


}
    
}