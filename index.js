// Code your solution in this file!
function distanceFromHqInBlocks(pickup, headquarters = 42){
    return Math.abs(pickup - headquarters);
};

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
};

function distanceTravelledInFeet(start, end){
    return Math.abs((end - start)*264);
}

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end)
    let fare;
    if (distance <= 400) {fare = 0}
    else if (distance <= 2000) {fare = (distance - 400) * .02}
    else if (distance <= 2500) {fare = 25}
    else if (distance > 2500) {fare = 'cannot travel that far'};
    return fare;
};

