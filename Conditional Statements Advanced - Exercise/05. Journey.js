function journey(budget, season) {
  let destination = "";
  let vacationType = "";
  let spentAmount = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
    switch (season) {
      case "summer":
        vacationType = "Camp";
        spentAmount = budget * 0.3;
        break;
      default:
        vacationType = "Hotel";
        spentAmount = budget * 0.7;
        break;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    switch (season) {
      case "summer":
        vacationType = "Camp";
        spentAmount = budget * 0.4;
        break;
      default:
        vacationType = "Hotel";
        spentAmount = budget * 0.8;
        break;
    }
  } else {
    destination = "Europe";
    vacationType = "Hotel";
    spentAmount = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${vacationType} - ${spentAmount.toFixed(2)}`);
}
journey(50, "summer");
journey(75, "winter");
journey(312, "summer");