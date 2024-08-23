const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const countdown = document.getElementById('countdown');
const birthdayTime = document.getElementById('birthdayTime');
const refresh = document.getElementById('refresh');

const currentYear = new Date().getFullYear();

const birthday = new Date(`Aug 23 ${currentYear} 00:00:00`);

const today = new Date();
const currentDateTime = new Date(`${today.getMonth()} ${today.getDate()} ${currentYear}`);

//JavaScript Ternary Operator
const age = currentDateTime < birthday ? currentYear - 1997 - 1 : currentYear - 1997;

// Set background year
dateyear.innerText = currentYear;

// time values
const s = 1000
const m = s * 60
const h = m * 60
const d = h * 24

let timerId

// Update countdown time
function updateCountdown() {
  const now = new Date();

  //If birthday pass out
  const nextBirthday = new Date(`Aug 23 ${currentYear + 1} 00:00:00`)
  
  // JavaScript Ternary Operator 
  const timeSpan = (birthday < now) ? nextBirthday - now : birthday - now;
  const nextAge =  (birthday < now) ? age+1 : age;


  const day = Math.floor(timeSpan / d);
  const hour = Math.floor((timeSpan % d) / h);
  const minute = Math.floor((timeSpan % h) / m);
  const second = Math.floor((timeSpan % m) / s);

   const August = now.getMonth() === birthday.getMonth() && now.getDate() === birthday.getDate()

  if (August) {
    console.log('Happy Birthday Misti')
    message.innerHTML = '<br>It gives me great pleasure to notify you that today is your birthday.<br>Happy Birthday!! Wishing you a memorable Birthday!!'
    countdown.style.display = "none"
    birthdayTime.style.display = "none"
    yearold.innerText = `${age+1}th Birthday!`;
    clearInterval(timerId)
    return
  }

  else {
    // Insert values into the DOM
    days.innerHTML = day;
    hours.innerHTML = hour < 10 ? '0' + hour : hour;
    minutes.innerHTML = minute < 10 ? '0' + minute : minute;
    seconds.innerHTML = second < 10 ? '0' + second : second; 
    yearold.innerText = `${nextAge}th Birthday!`;
  }
}

// Run every second
timerId = setInterval(updateCountdown, 1000);