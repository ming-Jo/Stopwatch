// [타이머 기능]
// 1. 시간/분/초 입력할 수 있습니다.
// 2. Start를 누르면 타이머가 1초 단위로 감소합니다.
// 3. Pause를 누르면 타이머가 멈춥니다.
// 4. 다시 Start를 누르면 재시작됩니다.
// 5. 0초가 되면 초기화 됩니다.
// 6. Reset을 누르면 초기화 됩니다.

const $stopwatch = document.querySelector('.timer');
const $inpHour = $stopwatch.querySelector('#inpHour');
const $inpMinute = $stopwatch.querySelector('#inpMin');
const $inpSecond = $stopwatch.querySelector('#inpSec');
const $btnStart = $stopwatch.querySelector('.btn-start');
const $btnPause = $stopwatch.querySelector('.btn-pause');
const $btnReset = $stopwatch.querySelector('.btn-reset');

function btnActive(){
    if (($inpHour.value !== "00") || ($inpMinute.value !== "00") || ($inpSecond.value !== "00")) {
        $btnStart.removeAttribute("disabled");
        $btnReset.removeAttribute("disabled");

        $btnStart.classList.add("active");
        $btnReset.classList.add("active");
        }
    // 사용자가 0이하의 숫자를 입력했을 때
    if(parseInt($inpHour.value) < 0) {
        alert('이 타이머는 지구의 시간만 입력할 수 있어요..👽');
        $inpHour.value = "";
        $inpMinute.value = "";
        $inpSecond.value = "";
        resetTimer();
    }
}

// 버튼 클릭해서 시간 추가하는 기능
// function inputTime() {
//     if(this.onclick) {
//         $inpHour.value += 1
//     }
// }

// function inputSecond() { 

// }


let timer;
let hour = 0;
let minute = 0;
let second = 0;
let allTime = 0;

function startTimer() {
    // 사용자가 입력한 hour, minute, second를 초 단위로 변환하여 저장
    allTime = (+$inpHour.value * 3600) + (+$inpMinute.value * 60) + (+$inpSecond.value);

    timer = setInterval(() => {
        allTime --;
        console.log(allTime)

        minute = Math.floor(allTime / 60);
        hour = Math.floor(minute / 60);
        second = allTime % 60;
        minute = minute % 60;

        $inpHour.value = String(hour).padStart(2, "0");
        $inpMinute.value = String(minute).padStart(2, "0");
        $inpSecond.value = String(second).padStart(2, "0");
        
        // 설정한 시간이 0이 될 경우 리셋
        if (allTime === 0) {
            resetTimer();
            // 타이머가 0이 되고나서 alert 띄워주기
            setTimeout(()=>{alert('⏰타이머가 끝났습니다!');},1);
        }
    }, 1000)
}

// pause 기능
function pauseTimer() {
    clearInterval(timer);

    $btnPause.setAttribute("hidden", "hidden");
    $btnStart.removeAttribute("hidden");
}

// reset 기능
function resetTimer() {
    clearInterval(timer);

    hour = 0;
    minute = 0;
    second = 0;
    allTime = 0;

    $btnPause.setAttribute("hidden", "hidden");
    $btnStart.removeAttribute("hidden");
    $btnStart.setAttribute("disabled", "disabled");
    $btnReset.setAttribute("disabled", "disabled");
    $btnPause.classList.remove("active");
    $btnStart.classList.remove("active");
    $btnReset.classList.remove("active");

    $inpHour.value = "";
    $inpMinute.value = "";
    $inpSecond.value = "";
}

// input에 값이 들어오면 버튼 비활성화 해제
$inpHour.addEventListener('change', btnActive);
$inpMinute.addEventListener('change', btnActive);
$inpSecond.addEventListener('change', btnActive);

// start 버튼을 클릭했을 때
$btnStart.addEventListener('click', () => {
    $btnStart.setAttribute("hidden", "hidden");
    $btnPause.removeAttribute("hidden");
    $btnPause.classList.add("active");
    startTimer();
});

// pause 버튼 클릭했을 때
$btnPause.addEventListener('click', pauseTimer);

// reset 버튼 클릭했을 때
$btnReset.addEventListener('click', resetTimer);