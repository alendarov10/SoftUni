function shopping(budget, videoCards, processors, ram) {
  const videoCardPrice = 250;

  let videoCardsCost = videoCards * videoCardPrice;
  let processorsPrice = videoCardsCost * 0.35;
  let ramPrice = videoCardsCost * 0.1;

  let processorsCost = processors * processorsPrice;
  let ramCost = ram * ramPrice;

  let totalCost = videoCardsCost + processorsCost + ramCost;

  if (videoCards > processors) {
    totalCost *= 0.85; //15% = 1 - 0.15
  }

  if (totalCost <= budget) {
    let leftMoney = budget - totalCost;
    console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
  } else {
    let neededMoney = totalCost - budget;
    console.log(
      `Not enough money! You need ${neededMoney.toFixed(2)} leva more!`
    );
  }
}
shopping(900, 2, 1, 3);