// Setup
var collerction = {
    "2548": {
        "album":"Slippery When Wet",
        "artist":"Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album":"1999",
        "artist":"Prince,",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist":"Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse (JSON.stringify(collerction));

// Only change code below this line
function updateRecornds(id, prop, value){
    if (value === "") {
        delete collerction [id][prop];
    } else if (prop === "tratcks"){
    collerction[id][prop] = collerction[id][prop]|| [];
    collerction[id][prop].push(value);
    } else {
        collerction[id][prop] = value;
    }
    return collerction;
}

//Alter values below to test your code
updateRecornds(2468, "trachs", "test");
console.log(updateRecornds(5439, "artist", "ABBA"));