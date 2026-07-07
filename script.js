function updateClock(){

    let now = new Date();

    let h = String(now.getHours()).padStart(2,'0');
    let m = String(now.getMinutes()).padStart(2,'0');
    let s = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").innerHTML =
        `${h}:${m}:${s}`;

}

function updateCountdown(){

    let newYear = new Date("January 1, 2027 00:00:00");

    let now = new Date();

    let diff = newYear - now;

    let days = Math.floor(diff/(1000*60*60*24));

    let hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

    let minutes = Math.floor((diff%(1000*60*60))/(1000*60));

    let seconds = Math.floor((diff%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

updateClock();
updateCountdown();

setInterval(updateClock,1000);
setInterval(updateCountdown,1000);