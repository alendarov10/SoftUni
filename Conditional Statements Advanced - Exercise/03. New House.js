function newHouse(flowerType, quantity, budget) {
  let price = 0;

  switch (flowerType) {
    case "Roses":
      price = quantity * 5.0;
      if (quantity > 80) {
        price *= 0.9; // -10% = 1 - 0.10
      }
      break;
    case "Dahlias":
      price = quantity * 3.8;
      if (quantity > 90) {
        price *= 0.85; // -15% = 1 - 0.15
      }
      break;
    case "Tulips":
      price = quantity * 2.8;
      if (quantity > 80) {
        price *= 0.85; // -15% = 1 - 0.15
      }
      break;
    case "Narcissus":
      price = quantity * 3.0;
      if (quantity < 120) {
        price *= 1.15; // +15% = 1 + 0.15
      }
      break;
    case "Gladiolus":
      price = quantity * 2.5;
      if (quantity < 80) {
        price *= 1.2; // +20% = 1 + 0.20
      }
      break;
  }

  if (budget >= price) {
    let moneyLeft = budget - price;
    console.log(
      `Hey, you have a great garden with ${quantity} ${flowerType} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    let moneyNeeded = price - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}
newHouse("Roses", 55, 250);
newHouse("Tulips", 88, 260);
newHouse("Narcissus", 119, 360);