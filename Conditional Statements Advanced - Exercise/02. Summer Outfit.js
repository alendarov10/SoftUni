function summerOutfit(degrees, timeOfDay) {
  let outfit = "";
  let shoes = "";

  if (degrees >= 10 && degrees <= 18) {
    if (timeOfDay === "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (timeOfDay === "Afternoon") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degrees > 18 && degrees <= 24) {
    if (timeOfDay === "Morning") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (timeOfDay === "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degrees >= 25) {
    if (timeOfDay === "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (timeOfDay === "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    } else if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }

  //   if (timeOfDay === "Morning") {
  //     if (degrees >= 10 && degrees <= 18) {
  //       outfit = "";
  //       shoes = "";
  //     } else if (degrees > 18 && degrees <= 24) {
  //       outfit = "";
  //       shoes = "";
  //     } else if (degrees >= 25) {
  //       outfit = "";
  //       shoes = "";
  //     }
  //   } else if (timeOfDay === "Afternoon") {
  //     if (degrees >= 10 && degrees <= 18) {
  //       outfit = "";
  //       shoes = "";
  //     } else if (degrees > 18 && degrees <= 24) {
  //       outfit = "";
  //       shoes = "";
  //     } else if (degrees >= 25) {
  //       outfit = "";
  //       shoes = "";
  //     }
  //   } else if (timeOfDay === "Evening") {
  //     if (degrees >= 10 && degrees <= 18) {
  //       outfit = "";
  //       shoes = "";
  //     } else if (degrees > 18 && degrees <= 24) {
  //       outfit = "";
  //       shoes = "";
  //     } else if (degrees >= 25) {
  //       outfit = "";
  //       shoes = "";
  //     }
  //   }

  //   switch (timeOfDay) {
  //     case "Morning":
  //       if (degrees >= 10 && degrees <= 18) {
  //         outfit = "";
  //         shoes = "";
  //       } else if (degrees > 18 && degrees <= 24) {
  //         outfit = "";
  //         shoes = "";
  //       } else if (degrees >= 25) {
  //         outfit = "";
  //         shoes = "";
  //       }
  //       break;
  //     case "Afternoon":
  //       if (degrees >= 10 && degrees <= 18) {
  //         outfit = "";
  //         shoes = "";
  //       } else if (degrees > 18 && degrees <= 24) {
  //         outfit = "";
  //         shoes = "";
  //       } else if (degrees >= 25) {
  //         outfit = "";
  //         shoes = "";
  //       }
  //       break;
  //     case "Evening":
  //       if (degrees >= 10 && degrees <= 18) {
  //         outfit = "";
  //         shoes = "";
  //       } else if (degrees > 18 && degrees <= 24) {
  //         outfit = "";
  //         shoes = "";
  //       } else if (degrees >= 25) {
  //         outfit = "";
  //         shoes = "";
  //       }
  //       break;
  //   }

  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(16, "Morning");
summerOutfit(22, "Afternoon");
summerOutfit(28, "Evening");