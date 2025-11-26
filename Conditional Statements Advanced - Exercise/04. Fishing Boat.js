function fishingBoat(budget, season, fishermen) {
  let boatPrice = 0;

  switch (season) {
    case "Spring":
      boatPrice = 3000;
      break;
    case "Summer":
    case "Autumn":
      boatPrice = 4200;
      break;
    case "Winter":
      boatPrice = 2600;
      break;
  }

  if (fishermen <= 6) {
    boatPrice *= 0.9;
  } else if (fishermen >= 7 && fishermen <= 11) {
    boatPrice *= 0.85;
  } else if (fishermen >= 12) {
    boatPrice *= 0.75;
  }

  if (fishermen % 2 === 0 && season !== "Autumn") {
    boatPrice *= 0.95;
  }

  if (budget >= boatPrice) {
    let moneyLeft = budget - boatPrice;

    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = (boatPrice - budget).toFixed(2);

    console.log(`Not enough money! You need ${moneyNeeded} leva.`);
  }
}
fishingBoat(3000, "Summer", 11);                
fishingBoat(3600, "Autumn", 6);
fishingBoat(2000, "Winter", 13);
// function summerOutfit(degrees, timeOfDay) {
//   let outfit = "";
//   let shoes = "";