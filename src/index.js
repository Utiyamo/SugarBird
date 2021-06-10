'use strict'

global.day = require('./Component/day');
global.endProcess = false;

const sugarbird = require('./Component/sugarbird');

while(!global.endProcess){
    sugarbird.onHourChange();
}

let days = Math.floor(sugarbird.getSugarbird().history.length / 24);
let hours = Math.floor(sugarbird.getSugarbird().history.length % 24);

console.log(`Time: ${days} days and ${hours} hours.`);

let counterForDays = 0;
let dayTime = 1;
let textforPrint = '';
sugarbird.getSugarbird().history.map(item => {
    let description;
    if(counterForDays === 0){
        description = `Day ${dayTime}: flowers -> ${item+1}`;
        counterForDays++;
        dayTime++;
    }
    else if(counterForDays === 9){
        description = `${textforPrint} ${item+1}`;
        console.log(description);
        description = '';
        counterForDays = 0;
    }
    else{
        description = `${textforPrint} ${item+1}`;
        counterForDays++;
    }
    
    textforPrint = description;
});
