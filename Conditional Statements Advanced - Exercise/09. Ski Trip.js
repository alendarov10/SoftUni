function skiVacation(days, roomType, rating) {
  const nights = days - 1;
  let price = 0;

  switch (roomType) {
    case "room for one person":
      price = nights * 18.0;
      break;
    case "apartment":
      price = nights * 25.0;
      if (nights < 10) {
        price *= 0.7;
      } else if (nights >= 10 && nights <= 15) {
        price *= 0.65;
      } else {
        price *= 0.5;
      }
      break;
    case "president apartment":
      price = nights * 35.0;
      if (nights < 10) {
        price *= 0.9;
      } else if (nights >= 10 && nights <= 15) {
        price *= 0.85;
      } else {
        price *= 0.8;
      }
      break;
  }

  switch (rating) {
    case "positive":
      price *= 1.25;
      break;
    case "negative":
      price *= 0.9;
      break;
  }

  console.log(price.toFixed(2));
}
skiVacation(14, "apartment", "positive");
skiVacation(30, "president apartment", "negative");
skiVacation(12, "room for one person", "positive");
// function summerOutfit(degrees, timeOfDay) {
//   let outfit = "";
//   let shoes = "";    