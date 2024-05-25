function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU', { hour12: false});
    let currentSeconds = today.getSeconds();
    let currentMinutes = today.getMinutes();
    let currentHours = today.getHours();
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('current-seconds').innerHTML = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
    let secondHand = document.getElementById('second-hand');
    let minuteHand = document.getElementById('minute-hand');
    let hourHand = document.getElementById('hour-hand');
                
    let secondRotation = (currentSeconds * 6) - 90; 
    let minuteRotation = (currentMinutes * 6 + currentSeconds * 0.1) - 90; 
    let hourRotation = ((currentHours % 12) * 30 + currentMinutes * 0.5) - 90; 
                
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
}
setInterval(showTime, 1000);
showTime();
