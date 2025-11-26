function lunchBreak(seriesName, episodeDuration, breakDuration) {
  let lunchTime = breakDuration / 8; // breakDuration * (1 / 8)

  let restTime = breakDuration / 4; // breakDuration * (1 / 4)

  let remainingTime = breakDuration - lunchTime - restTime;

  if (remainingTime >= episodeDuration) {
    let freeTime = Math.ceil(remainingTime - episodeDuration);

    console.log(
      `You have enough time to watch ${seriesName} and left with ${freeTime} minutes free time.`
    );
  } else {
    let neededTime = Math.ceil(episodeDuration - remainingTime);

    console.log(
      `You don't have enough time to watch ${seriesName}, you need ${neededTime} more minutes.`
    );
  }
}
lunchBreak("Game of Thrones", 60, 96);