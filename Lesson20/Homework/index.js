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

    const startTime = Date.now(); // Aktuelle Zeit in Millisekunden

    countDown = setInterval(() => {
        const now = Date.now(); // Aktuelle Zeit in Millisekunden
        const elapsedSeconds = Math.floor((now - startTime) / 1000); // Verstrichene Sekunden seit dem Start

        let remainingSeconds = totalSeconds - elapsedSeconds;
        if (remainingSeconds < 0) {
            clearInterval(countDown);
            document.getElementById('minDiv').innerHTML = '';
            document.getElementById('secDiv').innerHTML = '';
            document.getElementById('timer').innerHTML = 'Finish!';
            audio.play();

            startBtn.innerHTML = 'Back to start';
            startBtn.removeEventListener('click', start);
            startBtn.addEventListener('click', backToStart);
            return;
        }

        let min = Math.floor(remainingSeconds / 60);
        let sec = remainingSeconds % 60;
        sec = sec < 10 ? "0" + sec : sec;
        min = min < 10 ? "0" + min : min;

        document.getElementById('timer').innerHTML = min + ":" + sec;
    }, 1000);
}