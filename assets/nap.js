function startCountdown() {
    const napLengthElement = document.getElementById('napLength');
    let remainingSeconds = (napLengthElement.getAttribute('data-nap-length') * 60) - 1;

    const interval = setInterval(() => {
        let minutes = Math.floor(remainingSeconds / 60);
        let seconds = remainingSeconds % 60;

        document.getElementById('napLength').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        remainingSeconds--;

        if (remainingSeconds < 0 ) {
            clearInterval(interval);
        }
    }, 1000);
}

window.startCountdown = startCountdown;
