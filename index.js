// Declare your  variable here
var myGlobal = 10;

functionfun1() {
    // Assign 5 to oopsGlobal here 
    oopsGlobal = 5;
}

// Only change code above this line 
function fun2(){
    var output ="";
    if(typeof myglobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + ooppsGlobal;
    }
    console.log(output);
}
fin1();
fin2();