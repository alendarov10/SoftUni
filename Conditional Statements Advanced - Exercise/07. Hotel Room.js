function hotelRoom(month, nights) {
  let studioPrice = 0;
  let apartmentPrice = 0;

  switch (month) {
    case "May":
    case "October":
      studioPrice = 50;
      apartmentPrice = 65;
      break;
    case "June":
    case "September":
      studioPrice = 75.2;
      apartmentPrice = 68.7;
      break;
    case "July":
    case "August":
      studioPrice = 76;
      apartmentPrice = 77;
      break;
  }

  let totalStudioPrice = studioPrice * nights;
  let totalApartmentPrice = apartmentPrice * nights;

  if ((month === "May" || month === "October") && nights > 14) {
    totalStudioPrice *= 0.7;
  } else if ((month === "May" || month === "October") && nights > 7) {
    totalStudioPrice *= 0.95;
  }

  if ((month === "June" || month === "September") && nights > 14) {
    totalStudioPrice *= 0.8;
  }

  if (nights > 14) {
    totalApartmentPrice *= 0.9;
  }

  console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
}   
hotelRoom("May", 15);
hotelRoom("June", 14);
hotelRoom("August", 20);