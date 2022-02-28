const bicycle = {
    gear: 2,
    setGear: function(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);