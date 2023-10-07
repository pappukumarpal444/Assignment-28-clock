const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const secends = document.getElementById('secend');

function displayTime(){
const date = new Date();
    //  Getting hour, minutes, secand from data
   const theHours = date.getHours();
   const theMinutes = date.getMinutes();
   const theSecands = date.getSeconds();

  const hourRotation = 30*theHours + theMinutes/2;
  const minutesRotation = 6*theMinutes;
  const secandsRotation =  6*theSecands;

  hours.style.transform = `rotate(${hourRotation}deg)`;
  minutes.style.transform = `rotate(${minutesRotation}deg)`;
  secends.style.transform = `rotate(${secandsRotation}deg)`;

}


setInterval(displayTime, 1000)