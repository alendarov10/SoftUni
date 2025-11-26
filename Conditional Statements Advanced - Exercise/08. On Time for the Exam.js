function onTimeForExam(examHour, examMinute, arrivalHour, arrivalMinute) {
  const examTimeInMinutes = examHour * 60 + examMinute;
  const arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;
  const timesDifferenceInMinutes = arrivalTimeInMinutes - examTimeInMinutes;

  if (timesDifferenceInMinutes > 0) {
    console.log(`Late`);
    if (timesDifferenceInMinutes < 60) {
      console.log(`${timesDifferenceInMinutes} minutes after the start`);
    } else {
      const hours = Math.floor(timesDifferenceInMinutes / 60);
      const minutes = timesDifferenceInMinutes % 60;

      //   if (minutes < 10) {
      //     console.log(`${hours}:0${minutes} hours after the start`);
      //   } else {
      //     console.log(`${hours}:${minutes} hours after the start`);
      //   }

      console.log(
        `${hours}:${minutes.toString().padStart(2, "0")} hours after the start`
      );
    }
  } else if (timesDifferenceInMinutes >= -30) {
    console.log(`On time`);

    if (timesDifferenceInMinutes < 0) {
      console.log(
        `${Math.abs(timesDifferenceInMinutes)} minutes before the start`
      ); // diff = -15 Math.abs(diff) ще ми върне 15
    }
  } else {
    console.log(`Early`);
    const absTimesDifferenceInMinutes = Math.abs(timesDifferenceInMinutes);

    if (absTimesDifferenceInMinutes < 60) {
      console.log(`${absTimesDifferenceInMinutes} minutes before the start`);
    } else {
      const hours = Math.floor(absTimesDifferenceInMinutes / 60);
      const minutes = absTimesDifferenceInMinutes % 60;

      console.log(
        `${hours}:${minutes.toString().padStart(2, "0")} hours before the start`
      );
    }
  }
}
onTimeForExam(9, 30, 9, 50);        
