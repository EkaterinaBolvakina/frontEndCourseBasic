let countDown;
const audio = document.getElementById('audio');

addStartListener();

function addStartListener() {
    startBtn.addEventListener('click', start);
}

function backToStart() {
    clearInterval(countDown);
    audio.pause();
    document.getElementById('minDiv').innerHTML = 'Minutes';
    document.getElementById('secDiv').innerHTML = 'Seconds';
    document.getElementById('timer').innerHTML =
        '<input id="inputMin" type="text" placeholder="00" > : <input id="inputSec" type="text" placeholder="00">';
    startBtn.innerHTML = 'Start';
    startBtn.removeEventListener('click', backToStart);
    addStartListener();
}

function start() {
    const countMin = parseInt(document.getElementById('inputMin').value) || 0;
    const countSec = parseInt(document.getElementById('inputSec').value) || 0;


    const totalSeconds = countMin * 60 + countSec;

    if (totalSeconds === 0) {
        alert('Please enter a valid time.');
        return;
    }

    const startTime = new Date();
    const stopTime = startTime.setSeconds(startTime.getSeconds() + totalSeconds);

    countDown = setInterval(() => {
        const now = new Date().getTime();
        const remain = stopTime - now;

        let min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((remain % (1000 * 60)) / 1000);
        sec = sec < 10 ? "0" + sec : sec;
        min = min < 10 ? "0" + min : min;

        document.getElementById('timer').innerHTML = min + ":" + sec;

        if (remain < 0) {
            clearInterval(countDown);
            document.getElementById('minDiv').innerHTML = '';
            document.getElementById('secDiv').innerHTML = '';
            document.getElementById('timer').innerHTML = 'Finish!';
            audio.play();

            startBtn.innerHTML = 'Back to start';
            startBtn.removeEventListener('click', start);
            startBtn.addEventListener('click', backToStart);
        }
    }, 1000);
}