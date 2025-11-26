function oscars(input) {
  let actorName = input[0];
  let points = Number(input[1]);

  for (let i = 3; i < input.length; i++) {
    let judgeName = input[i];
    let judgePoint = Number(input[++i]);

    const namelength = judgeName.length;
    const additionalPoints = (namelength * judgePoint) / 2;
    points += additionalPoints;

    if (points > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(
          1
        )}!`
      );
      return;
    }
  }

  const pointsNeeded = 1250.5 - points;
  console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);

  