// [타이머 기능]
// 1. 시간/분/초 입력할 수 있습니다.
// 2. Start를 누르면 타이머가 1초 단위로 감소합니다.
// 3. Pause를 누르면 타이머가 멈춥니다.
// 4. 다시 Start를 누르면 재시작됩니다.
// 5. 0초가 되면 초기화 됩니다.
// 6. Reset을 누르면 초기화 됩니다.

const $stopwatch = document.querySelector('.timer');

const btnStart = document.querySelector('.btn-start');
const btnReset = document.querySelector('.btn-reset');
const btnHours = document.querySelector('.btn-hour');
const btnMinute = document.querySelector('.btn-min');
const btnSecond = document.querySelector('.btn-sec');

let timer = 0
let timeID = 0

function inputTime() {
    if(this.onclick) {
        timeID = setInterval(() => {
            timer += 1
            this.textContent = timer
        }, 1000)
    } else {
        clearInterval(timeID)
    }
}

function inputSecond() { 

}

function startTimer() {

}

function pauseTimer() {

}

function resetTimer() {

}

btnHours.addEventListener('click', inputTime);
btnMinute.addEventListener('click', inputTime);
btnSecond.addEventListener('click', inputSecond);

btnStart.addEventListener('click', startTimer);
btnReset.addEventListener('click', resetTimer);

