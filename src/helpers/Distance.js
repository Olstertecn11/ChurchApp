function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
            Math.sin(dLon / 2) *
            Math.cos(lat1) *
            Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Number.parseFloat(d).toFixed(2);
}

function toRad(Value) {
    return (Value * Math.PI) / 180;
}

function getDistance(elements, item, current){
    let arr = [];
    let lowers = [];
    for(var j = 0; j < elements.length; j++){
        var i = elements[j];
        arr.push(Number.parseFloat(calcCrow(current[0], current[1], i.PosX, i.PosY)));
    }   
    var cont = 0;
    while(cont < 5){
        const minor = Math.min.apply(null, arr);
        lowers.push(Number.parseFloat(minor));
        const pos = arr.indexOf(minor);
        if(pos !== -1){
            arr.splice(pos, 1);
        }
        cont += 1;
    }

    for(var i = 0; i < 5; i++){
        if(calcCrow(current[0], current[1], item.PosX, item.PosY).toString() === lowers[i].toString()){
            return true;
        }
    }
    return false;
}





module.exports = {
    calcCrow,
    toRad,
    getDistance
}




