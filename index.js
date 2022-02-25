function ordeMyLogic(val) {
    if ( val < 5) { 
      return "Less than 5";
    } else if ( val < 10) { 
      return "Less than 10";
    } else{
      return "Greater than or equal to 10";
    }
}

// Change this value to test
console.log(ordeMyLogic(3));