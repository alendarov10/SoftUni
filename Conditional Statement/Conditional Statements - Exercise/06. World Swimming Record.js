function swimmingRecordCalculation(record, distance, timePerMeter) {
  let swimmingTime = distance * timePerMeter;

  let slowdownTimes = Math.floor(distance / 15);
  let slowdownTime = slowdownTimes * 12.5;

  let totalTime = swimmingTime + slowdownTime;

  if (totalTime < record) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    let slowerBy = totalTime - record;
    console.log(`No, he failed! He was ${slowerBy.toFixed(2)} seconds slower.`);
  }
}
swimmingRecordCalculation(55555.67, 3017, 5.03);