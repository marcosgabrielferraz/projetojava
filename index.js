function freezeObj() {
    "use strict";
    const MATH_CONSTAANTS = {
        PI:3.14
    };
    
    try {
        MATH_CONSTAANTS.PI = 99;
    }   catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTAANTS.PI;
}

const PI = freezeObj();

console.log(PI);