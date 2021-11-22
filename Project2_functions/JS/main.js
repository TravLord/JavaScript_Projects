function my1stFunction() {
    var str = "This text is purple!";
    var result = str.fontcolor("purple"); 
    document.getElementById("Purple_Text").innerHTML= result;
}
function my_function2() {
    var con = "Come together";
    con += " right now, over me.";
    document.getElementById("concatenate").innerHTML = con;

}

function new_function() {
    var test = document.getElementById('color_change');
    test.style.color = "purple";
}



function self_written(x, y) {
    result = x * y;
    document.getElementById("test").innerHTML= result;
  }d
