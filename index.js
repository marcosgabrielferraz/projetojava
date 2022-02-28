var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4 
var z = voxel.z; // z = 6.54

const { x : a, Y : b, z : c} = voxel // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
    "use strict";
    // change code below this line
    const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
}


console.log(getTempOfTmrw(AVG_TEMPERATURES)); // SHOULD BE 79