function timePlus15Minutes(hours, minutes) {
    let totalMinutes = minutes + 15;
    if (totalMinutes >= 60) {
        hours += Math.floor(totalMinutes / 60);
        totalMinutes = totalMinutes % 60;
    }
    if (hours >= 24) {
        hours = hours % 24;
    }
    if (totalMinutes < 10) {
        return `${hours}:0${totalMinutes}`;
    }
    return `${hours}:${totalMinutes}`;
}

console.log(timePlus15Minutes(1, 46));