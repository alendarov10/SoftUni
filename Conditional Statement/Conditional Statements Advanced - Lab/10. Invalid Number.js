function invalidNumber(num){
  let isValid = (num < 100 || num > 200) && num !== 0;
  if (isValid){
    console.log("invalid");
  }



}
invalidNumber(150);