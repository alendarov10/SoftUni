function toyStoreCalculation(
  vacationPrice,
  puzzlesCount,
  dollsCount,
  bearsCount,
  minionsCount,
  trucksCount
) {
  let puzzlePrice = 2.6;
  let dollPrice = 3.0;
  let bearPrice = 4.1;
  let minionPrice = 8.2;
  let truckPrice = 2.0;

  let totalSum =
    puzzlesCount * puzzlePrice +
    dollsCount * dollPrice +
    bearsCount * bearPrice +
    minionsCount * minionPrice +
    trucksCount * truckPrice;

  let totalToysCount =
    puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

  if (totalToysCount >= 50) {
    totalSum *= 0.75; // 25% = 1 - 0.25
  }

  let rent = totalSum * 0.1;

  let profit = totalSum - rent;

  if (profit >= vacationPrice) {
    let leftMoney = profit - vacationPrice;
    console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
  } else {
    let neededMoney = vacationPrice - profit;
    console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
  }
}

toyStoreCalculation(40.8, 20, 25, 30, 50, 10);