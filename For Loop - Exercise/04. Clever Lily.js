function smartLily(age, washingMachinePrice, toyPrice) {
  let savedMoney = 0;
  let toysCount = 0;
  let moneyReceived = 10;

  for (let birthday = 1; birthday <= age; birthday++) {
    if (birthday % 2 === 1) {
      toysCount++;
    } else {
      savedMoney += moneyReceived;
      moneyReceived += 10;
    }
  }

  const brotherTakes = Math.floor(age / 2) * 1;

  const toysMoney = toysCount * toyPrice;

  const totalMoney = savedMoney + toysMoney - brotherTakes;

  if (totalMoney >= washingMachinePrice) {
    const remainingMoney = totalMoney - washingMachinePrice;
    console.log(`Yes! ${remainingMoney.toFixed(2)}`);
  } else {
    const moneyNeeded = washingMachinePrice - totalMoney;

    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}

smartLily();