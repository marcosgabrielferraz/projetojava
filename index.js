// Setup 
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function chechOjt(checkprop){
    // Your code here]
    if (myObj.hasOwnProperty(checkprop)){
        return myObj[checkprop];
    }else {
        return "Not Found"
    }
}

// Test your code by modifying these values
console.log(chechOjt("Hello"));