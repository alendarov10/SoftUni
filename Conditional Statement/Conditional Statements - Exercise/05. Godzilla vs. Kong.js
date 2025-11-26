function godzillaVsKong(budget, extras, clothingPrice) {
  let decorCost = budget * 0.1;

  let clothingCost = extras * clothingPrice;

  if (extras > 150) {
    clothingCost *= 0.9; // 1 - 0.10
  }

  let totalCost = decorCost + clothingCost;

  if (totalCost > budget) {
    let neededMoney = totalCost - budget;
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
  } else {
    let leftMoney = budget - totalCost;
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`
    );
  }
}
godzillaVsKong(20000, 120, 55.5);