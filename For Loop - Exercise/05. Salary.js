function salary(input) {
  let openTabs = Number(input[0]);
  let incomeSalary = Number(input[1]);
  let isLostSalary = false;

  for (let i = 2; i < openTabs + 2; i++) {
    let currentTab = input[i];

    if (currentTab === "Facebook") {
      incomeSalary -= 150;
    } else if (currentTab === "Instagram") {
      incomeSalary -= 100;
    } else if (currentTab === "Reddit") {
      incomeSalary -= 50;
    }

    if (incomeSalary <= 0) {
      console.log("You have lost your salary.");
      isLostSalary = true;
      break;
    }
  }

  if (!isLostSalary) {
    // if (isLostSalary === false) {    console.log(incomeSalary);  }
    console.log(incomeSalary);
  }
}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);