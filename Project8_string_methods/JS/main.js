// concat method example //

function together_now() { 
    var word1 = "How "     
    var word2 = "are ";
    var word3 = "you ";
    var word4 = "doing? ";
    var put_together = word1.concat(word2, word3, word4);
    document.getElementById("concat").innerHTML = put_together;
}                  
 // slice method example //

function slice_ex(){
    var sentence1 = "We all went to the store.";
    var proofread = sentence1.slice(3,6);
    document.getElementById("slizice").innerHTML =proofread;
}
// UPPERCASE example //

function uppercase() {
    var wordy = "can you hear me?";
    var result = wordy.toUpperCase(); 
    document.getElementById("upcase").innerHTML = result;
}

// Search method example //

function find_it() {
    var look= "Where is that again?";
    var found = look.search("that")
    document.getElementById("finding").innerHTML = found;
}

// toString method example //

function change() {
    var morf = 777;
    document.getElementById("flip").innerHTML = morf.toString();

}

// Toprecision method example //

function precise() {
    var number = 6.66667898;
    document.getElementById("shortened").innerHTML = number.toPrecision(6);
}

// Tofixed method example //

function fixed() {
    var adjust = 7.99;
    document.getElementById("short").innerHTML = adjust.toFixed(1);
}

// valueOf method mehtod example //

function real() {
var equals = "wordy word like words";
var got = equals.valueOf();
document.getElementById("val").innerHTML = got;
}

