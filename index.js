function printManyTimes(str) {
    "use strict";
    
    const SENTEnCE = str + "is cool!";
    
    sentece = str + "is amazing!"
    
    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTEnCE);
    }
    
}
printManyTimes("freeCodeCamp");