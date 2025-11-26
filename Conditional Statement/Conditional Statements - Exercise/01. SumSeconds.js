function sumOfSeconds(sec1, sec2, sec3) {
    let totalSeconds = sec1 + sec2 + sec3;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
        return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

console.log(sumOfSeconds(35, 45, 44));