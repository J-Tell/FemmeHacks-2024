let workTag = document.getElementById('work');
let breakTag = document.getElementById('break');

let workTime = 1;
let breakTime = 5;
let seconds = "00"

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTag.classList.add('active');
}

function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1 ) {
                let audio = new Audio('alarm.mp3');
                audio.play();
                if (breakCount % 2 === 0) {
                    workMinutes = breakMinutes;
                    breakCount++

                    workTag.classList.remove('active');
                    breakTag.classList.add('active');
                } else {
                    workMinutes = workTime;
                    breakCount++;

                    breakTag.classList.remove('active');
                    workTag.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    setInterval(timerFunction, 1000);
}