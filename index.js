// Setup 
var contacts = [
    {
        "firsName":"Akira",
        "lastName":"Laine",
        "number":"0543236543",
        "like":["Pizza", "Coding", "Brownie Points"] 
        },
    {
        "firsName":"Harry",
        "lastName":"Potter",
        "number":"0994372684",
        "like":["Hogwarts", "Magic", "Hagrid"] 
        },
    {
        "firsName":"Sherlock",
        "lastName":"Holmes",
        "number":"0487345643",
        "like":["Intriguing Cases", "violin"] 
        },
    {
        "firsName":"kristian",
        "lastName":"Vos",
        "number":"unknown",
        "like":["JavaScript", "Gaming", "Foxes"] 
        }
];

function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firsName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

//Change hese values to test function
var data = lookUpProfile("Shirlock", "lastName");

console.log(data);