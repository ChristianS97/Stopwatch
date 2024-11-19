const millisec = document.querySelector('.milliseconds');
const sec = document.querySelector('.seconds');
const min = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const resume = document.querySelector('.start');
let milliNum = 0;
let secNum = 0;
let minNum = 0;
let hoursNum = 0;
let INTERVAL;
function milliseconds() {
    milliNum++;
  
    if (milliNum < 10) {
      millisec.innerHTML = '0' + milliNum;
    } else {
      millisec.innerHTML = milliNum;
    }
  
    if (milliNum == 99) {
      milliNum = 0;
      seconds();
    }
}
  
function seconds() {
    secNum++;
    
    if (secNum < 10) {
        sec.innerHTML = '0' + secNum;
    } else {
        sec.innerHTML = secNum;
    }

    if (secNum == 59) {
        secNum = 0;
        minutes();
    }
}
  
function minutes() {
    minNum++;
    
    if (minNum < 10) {
        min.innerHTML = '0' + minNum;
    } else {
        min.innerHTML = minNum;
    }

    if (minNum == 59) {
        minNum = 0;
        hoursCounter();
    }
}
function hoursCounter() {
    hoursNum++;
    
    if (hoursNum < 10) {
        hours.innerHTML = '0' + hoursNum;
    } else {
        hours.innerHTML = hoursNum;
    }
}
function start() {
    resume.innerHTML = 'START';
    clearInterval(INTERVAL);
    INTERVAL = setInterval(() => {
        milliseconds();
    }, 10);
}
function stop() {
    clearInterval(INTERVAL);
    resume.innerHTML = 'RESUME';
}
function reset() {
    hours.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    millisec.innerHTML = '00';

    hoursNum = 0;
    minNum = 0;
    secNum = 0;
    millisecNum = 0;
}
