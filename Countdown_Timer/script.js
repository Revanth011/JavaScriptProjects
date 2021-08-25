const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const newYear = "Jan 01 2022";

function countdown(){
    const newYearD = new Date(newYear);
    const currentYear = new Date();

    const TotalSeconds = (newYearD - currentYear)/1000;

    const dayys = Math.floor(TotalSeconds/(3600*24));
    const hours = Math.floor(TotalSeconds/3600) % 24;
    const mins = Math.floor(TotalSeconds/60) % 60;
    const seconds = Math.floor(TotalSeconds) % 60;
    
    daysEl.innerHTML = dayys;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = seconds;

}
countdown();
setInterval(countdown, 1000);