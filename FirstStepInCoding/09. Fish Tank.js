function aquariumCalculator(length, width, height, occupiedPercent) {
  let volumeCm3 = length * width * height;
  let volumeLiters = volumeCm3 / 1000;
  let availablePercent = 1 - occupiedPercent / 100;
  let neededLiters = volumeLiters * availablePercent;

  console.log(neededLiters);
}

aquariumCalculator(85, 75, 47, 17);
aquariumCalculator(105, 77, 89, 18.5);