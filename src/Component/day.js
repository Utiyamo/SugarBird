'use strict';


const day = {
    count: 1,
    sunOn: true,
    flowers: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
};

class Day{
    onDayStart(){
        day.sunOn = true;
        day.count = 1;
    }

    onDayEnd(){
        day.sunOn = false;
        day.count = 1;
    }

    getDay(){
        return day;
    }
}


module.exports = new Day;
