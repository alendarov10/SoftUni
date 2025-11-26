function trekkingMania(input) {
  let groupCount = Number(input[0]);

  let musalaCounter = 0;
  let montblancCounter = 0;
  let kilimanjaroCounter = 0;
  let k2Counter = 0;
  let everestCounter = 0;
  let totalPeople = 0;

  for (let i = 1; i <= groupCount; i++) {
    let peopleInTheGroup = Number(input[i]);

    totalPeople += peopleInTheGroup;

    if (peopleInTheGroup <= 5) {
      musalaCounter += peopleInTheGroup;
    } else if (peopleInTheGroup >= 6 && peopleInTheGroup <= 12) {
      montblancCounter += peopleInTheGroup;
    } else if (peopleInTheGroup >= 13 && peopleInTheGroup <= 25) {
      kilimanjaroCounter += peopleInTheGroup;
    } else if (peopleInTheGroup >= 26 && peopleInTheGroup <= 40) {
      k2Counter += peopleInTheGroup;
    } else if (peopleInTheGroup >= 41) {
      everestCounter += peopleInTheGroup;
    }
  }

  const musalaPercent = ((musalaCounter / totalPeople) * 100).toFixed(2);
  const montblancPercent = ((montblancCounter / totalPeople) * 100).toFixed(2);
  const kilimanjaroPercent = ((kilimanjaroCounter / totalPeople) * 100).toFixed(2);
  const k2Percent = ((k2Counter / totalPeople) * 100).toFixed(2);
  const everestPercent = ((everestCounter / totalPeople) * 100).toFixed(2);

  console.log(`${musalaPercent}%`);
  console.log(`${montblancPercent}%`);
  console.log(`${kilimanjaroPercent}%`);
  console.log(`${k2Percent}%`);
  console.log(`${everestPercent}%`);
}
// Ако Judge подава входа така:
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]); 

