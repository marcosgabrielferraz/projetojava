function nextInline(arr, item) {
    //Yuor code here
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
 
 console.log("Before:"+ JSON.stringify(testArr));
 console.log(nextInline(testArr, 6));
 console.log("After: " + Json.stringify(testArr));