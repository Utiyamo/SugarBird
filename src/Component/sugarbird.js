'use strict'

const sugarbird = {
    history: [],
    sleep: false
};

class Sugarbird{
    onHourChange(){
        if(global.day.getDay().sunOn){
            let counter = 0;
            let rdmNumbers = [];
        
            while(counter < 9){
                let rdm = Math.floor(Math.random() * (10)) + 1;
                let exist = false;
        
                rdmNumbers.map(item => {
                    if(rdm === item){
                        exist = true;
                    }
                })
                if(exist)
                    continue;
        
                rdmNumbers.push(rdm);
                
                rdm--;
                let flowers = global.day.getDay().flowers;

                if(flowers[rdm] > 0){
                    flowers[rdm]--;
                    sugarbird.history.push(rdm);
                    global.day.getDay().count++;
                    rdmNumbers = [];
        
                    if(global.day.getDay().count === 13){
                       global.day.onDayEnd();
                       sugarbird.sleep = true;
                    }
                    break;
                }
                else
                    counter++;
            }

            if(counter === 9){
                global.endProcess = true;
            }
        }
        else{
            global.day.getDay().count++;
            if(global.day.getDay().count === 13){
                global.day.onDayStart();
                sugarbird.sleep = false;
            }
        }
    
        
    }

    getSugarbird(){
        return sugarbird;
    }
}

module.exports = new Sugarbird;
