function testSize(num) {
    if (num < 5){ 
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
         return "Medium"   
    } else if (num < 20) {
        return "Large"
    } else {
        return "huge"
    }
}

console.log(testSize(19));

/*
White chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "huge"
*/