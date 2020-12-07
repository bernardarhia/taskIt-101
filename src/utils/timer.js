
function timer(hoursNum, minutesNum, secondsNum) {
    secondsNum--;
    if (secondsNum === 0) {
        if (minutesNum === 0) {
            minutesNum = 0;
        }
        else {
            secondsNum = 59;
            minutesNum--;
        }
    } if (minutesNum === 0 && secondsNum == 0) {
        if (hoursNum !== 0) {
            hoursNum--;
            minutesNum = 59;
            secondsNum = 59;
        } else {
            return;
        }
    }
}

export {timer}
