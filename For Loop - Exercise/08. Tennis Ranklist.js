function tennisRanking(input) {
  let tournamentsCount = Number(input[0]);
  let startingPoints = Number(input[1]);

  let totalPoints = startingPoints;
  let tournamentPoints = 0;
  let wonTournaments = 0;

  for (let i = 2; i < input.length; i++) {
    let stage = input[i];

    switch (stage) {
      case "W":
        totalPoints += 2000;
        tournamentPoints += 2000;
        wonTournaments++;
        break;
      case "F":
        totalPoints += 1200;
        tournamentPoints += 1200;
        break;
      case "SF":
        totalPoints += 720;
        tournamentPoints += 720;
        break;
    }
  }

  let averagePoints = Math.floor(tournamentPoints / tournamentsCount);
  let winPercentage = ((wonTournaments / tournamentsCount) * 100).toFixed(2);

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${averagePoints}`);
  console.log(`${winPercentage}%`);
}
tennisRanking(["5", "1400", "F", "SF", "W", "W", "SF"]);