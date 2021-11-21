function Dictionary1(){      // FIRST DICTIONARY EXAMPLE 
    var Customer= {
        status: "active",
        date_of_birth:"02/04/83",
        priority_level: 2,
        region: "mid-west",
        
    };
    delete Customer.region;        // DELETING KVP REGION
    document.getElementById("Dictionary").innerHTML = Customer.region;    // CANNOT LOCATE DELETED KVP OUTPUT UNDEFINED 
}